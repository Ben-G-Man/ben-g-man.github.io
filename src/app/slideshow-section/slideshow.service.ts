import { ElementRef, Injectable } from '@angular/core';
import { Project, ProjectTag } from '../projects/project.model';
import { ProjectService } from '../projects/project.service';

interface YearSizeDict { [key: number]: number; }

@Injectable({
    providedIn: 'root'
})
export class SlideshowService {
    filteredProjects: Project[] = [];
    slideIndex = 0;
    private _yearSizes: YearSizeDict = {};

    /* Filter */
    private _filterStartDate: Date = new Date();
    private _filterEndDate: Date = new Date();
    private _tagFilters: ProjectTag[] = [];

    filterStartYear: number = 0;
    filterEndYear: number = 0;

    constructor(private _projectService: ProjectService) {
        this._setFilterDefaults();
        this._refreshFilteredProjects(this._projectService.getProjects());
    }

    getFilteredYears(): number[] {
        return this._getYears(this.filteredProjects);
    }

    getAllYears(): number[] {
        return this._getYears(this._projectService.getProjects());
    }

    getRelativeYearSize(year: number): number {
        return this._yearSizes[year] / this.filteredProjects.length * 100;
    }

    getYearStartPos(selectedYear: number): number {
        if (!this.getFilteredYears().includes(selectedYear)) return -1;
        let indexCount = 0;
        this.getFilteredYears().forEach(year => {
            if (year > selectedYear) indexCount += this._yearSizes[year];
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
        const index = this.getYearStartPos(year);
        if (index === -1) return;
        this.setSlide(index);
    }

    private _refreshFilteredProjects(projects: Project[]): number {
        const _tempProjects = this._filterProjects(projects);
        this._orderProjects(_tempProjects);
        this.filteredProjects = _tempProjects;

        this.setSlide(0);

        this._refreshYearSizes();
        this._refreshYearFilters();

        console.log(this.filteredProjects.length);
        return _tempProjects.length;
    }

    private _setFilterDefaults(): void {
        this._filterStartDate = this._getEarliestProject(this._projectService.getProjects())?.startDate ?? new Date(2020);
        this._filterEndDate = this._getLatestProject(this._projectService.getProjects())?.startDate ?? new Date();
        this._tagFilters = Object.values(ProjectTag);
    }

    private _refreshYearFilters(): void {
        this._refreshFilterStartYear();
        this._refreshFilterEndYear();
    }

    private _getEarliestProject(projects: Project[]): Project | null {
        if (projects.length === 0) return null;

        return projects.reduce((earliest, current) =>
            current.startDate < earliest.startDate ? current : earliest
        )
    }

    private _getLatestProject(projects: Project[]): Project | null {
        if (projects.length === 0) return null;

        return projects.reduce((latest, current) => {
            const latestDate = latest.endDate && latest.endDate > latest.startDate ? latest.endDate : latest.startDate
            const currentDate = current.endDate && current.endDate > current.startDate ? current.endDate : current.startDate
            return currentDate > latestDate ? current : latest
        })
    }

    private _filterProjects(projects: Project[]): Project[] {
        return this._filterDates(this._filterTags(projects));
    }

    private _filterTags(projects: Project[]): Project[] {
        return projects.filter(p => p.tags.filter(v =>this._tagFilters.includes(v)).length > 0);
    }

    private _filterDates(projects: Project[]): Project[] {
        let filterStart: Date = this.getFilterStartDate();
        let filterEnd: Date = this.getFilterEndDate();

        console.log("Filter start date = " + filterStart + ", filter end date = " + filterEnd + ".")

        return projects.filter(p => {
            if (p.endDate == null) {
                return (p.startDate > filterStart && p.startDate < filterEnd);
            } else {
                return (p.startDate > filterStart && p.endDate < filterEnd);
            }
        });
    }

    private _orderProjects(projects: Project[]) {
        projects.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    }

    private _refreshYearSizes() {
        this._yearSizes = this._getYearSizes(this.filteredProjects);
    }

    private _getYearSizes(projects: Project[]): YearSizeDict {
        const dict: YearSizeDict = {};
        projects.forEach(project => {
            const year = project.startDate.getFullYear();
            dict[year] = (dict[year] || 0) + 1;
        });
        return dict;
    }

    private _getYears(projects: Project[]): number[] {
        const years: number[] = [];
        projects.forEach(project => {
            const year = project.startDate.getFullYear();
            if (!years.includes(year)) {
                years.push(year);
            }
        });
        return years.sort((a, b) => b - a);
    }

    previousSlide(): void { this.setSlide(this.slideIndex - 1); }

    nextSlide(): void { this.setSlide(this.slideIndex + 1); }

    setSlide(newIndex: number): void {
        if (newIndex < 0 || newIndex >= this.filteredProjects.length) return;
        this.slideIndex = newIndex;
    }

    setFilterStartDate(date: Date) {
        this._filterStartDate = date;
        if (this._filterStartDate > this._filterEndDate) {
            this._filterEndDate = this._filterStartDate;
        }
        this._refreshFilteredProjects(this._projectService.getProjects());
        this._refreshFilterStartYear();
    }

    setFilterEndDate(date: Date) {
        this._filterEndDate = date;
        if (this._filterStartDate > this._filterEndDate) {
            this._filterStartDate = this._filterEndDate;
        }
        this._refreshFilteredProjects(this._projectService.getProjects());
        this._refreshFilterEndYear();
    }

    private _refreshFilterStartYear() {
        this.filterStartYear = this._filterStartDate.getFullYear();
    }

    private _refreshFilterEndYear() {
        this.filterEndYear = this._filterEndDate.getFullYear();
    }

    getFilterStartDate(): Date {
        return new Date(this._filterStartDate.getFullYear(), 0, 1);
    }

    getFilterEndDate(): Date {
        return new Date(this._filterEndDate.getFullYear(), 11, 31);
    }
}