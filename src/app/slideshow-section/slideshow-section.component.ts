import { Component, ElementRef } from '@angular/core';
import { Project, ProjectTag } from '../projects/project.model';
import { ProjectService } from '../projects/project.service';
import { SlideComponent } from './slide/slide.component';
import { MatIcon } from "@angular/material/icon";

interface YearSizeDict {
    [key: number]: number;
}

@Component({
    selector: 'app-slideshow-section',
    standalone: true,
    imports: [SlideComponent, MatIcon],
    templateUrl: './slideshow-section.component.html',
    styleUrl: './slideshow-section.component.scss'
})

export class SlideshowSectionComponent {
    projects: Project[] = [];
    filteredProjects: Project[] = [];
    filteredProjectYears: number[] = [2020, 2021, 2022, 2023, 2024];
    slideIndex: number = 0;
    slidePos: number = 0;
    yearSizes: YearSizeDict = {};

    constructor(private projectService: ProjectService, private el: ElementRef) { }

    ngOnInit(): void {
        this.projects = this.projectService.getProjects();
        this.searchProjects(this.projects);
    }

    getYears(): number[] {
        let years: number[] = Object.keys(this.yearSizes).map(Number);
        years.sort((a, b) => b - a);
        return years;
    }

    getRelativeYearSize(year: number): number {
        return this.yearSizes[year] / this.projects.length * 100;
    }

    getYearStartPos(selectedYear: number): number {
        let indexCount: number = 0;

        this.getYears().forEach((year) => {
            if (year > selectedYear) indexCount += this.yearSizes[year];
        });

        return indexCount;
    }

    getSelectedYear(): number {
        return this.filteredProjects[this.slideIndex].startDate.getFullYear();
    }

    getProgress(): number {
        return this.slideIndex / (this.filteredProjects.length - 1) * 100;
    }

    goToYear(year: number): void {
        this.setSlide(this.getYearStartPos(year));
    }

    searchProjects(projects: Project[]): number {
        let _tempProjects = this.filterProjects(projects);
        this.orderProjects(_tempProjects);
        this.filteredProjects = _tempProjects;

        this.setSlide(0);

        this.yearSizes = this.getYearSizes();

        console.log(this.yearSizes);

        return _tempProjects.length;
    }

    filterProjects(projects: Project[]): Project[] {
        let _filteredProjects: Project[] = [];

        projects.forEach((project) => {
            if (project.tags.includes(ProjectTag.Angular)) _filteredProjects.push(project);
        });

        return _filteredProjects;
    }

    orderProjects(projects: Project[]) {
        projects.sort((a: Project, b: Project) => b.startDate.getTime() - a.startDate.getTime());
    }

    getYearSizes(): YearSizeDict {
        let newYearSizes: YearSizeDict = {};

        this.filteredProjects.forEach(project => {
            let year: number = project.startDate.getFullYear();

            if (!Object.keys(newYearSizes).map(Number).includes(year)) {
                newYearSizes[year] = 1;
            } else {
                newYearSizes[year] = newYearSizes[year] + 1;
            }
        })

        return newYearSizes;
    }

    previousSlide(): void { this.setSlide(this.slideIndex - 1); }

    nextSlide(): void { this.setSlide(this.slideIndex + 1); }

    setSlide(newIndex: number): void {
        if (newIndex >= this.filteredProjects.length) return;
        if (newIndex < 0) return;
        this.slideIndex = newIndex;
        this.el.nativeElement.style.setProperty('--reel-index', this.slideIndex);
    }

    prevInactive(): boolean {
        return (this.slideIndex == 0);
    }

    nextInactive(): boolean {
        return (this.slideIndex == this.projects.length - 1);
    }

    private _scrollThrottleTime: number = 200; // in ms
    private _minScroll: number = 50;
    private _lastScrollTime: number = 0;

    onScroll(event: WheelEvent) {
        const now = Date.now();
        if (now - this._lastScrollTime < this._scrollThrottleTime) return;  // Animation has not finished
        if (Math.abs(event.deltaY) < this._minScroll) return;               // Scroll is too small

        event.preventDefault();
        const delta = event.deltaY;

        if (delta > 0) this.nextSlide();
        else if (delta < 0) this.previousSlide();

        this._lastScrollTime = now;
    }
}
