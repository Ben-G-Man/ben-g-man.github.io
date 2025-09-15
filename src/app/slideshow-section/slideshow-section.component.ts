import { Component, ElementRef, HostListener } from '@angular/core';
import { SlideComponent } from './slide/slide.component';
import { MatIcon } from "@angular/material/icon";
import { SlideshowService } from './slideshow.service';
import { SlideshowFilterComponent } from "./slideshow-filter/slideshow-filter.component";
import { DropDownListComponent } from "../generic/drop-down-list/drop-down-list.component";
import { UiService } from '../ui.service';

@Component({
    selector: 'app-slideshow-section',
    standalone: true,
    imports: [SlideComponent, MatIcon, SlideshowFilterComponent, DropDownListComponent],
    templateUrl: './slideshow-section.component.html',
    styleUrl: './slideshow-section.component.scss'
})

export class SlideshowSectionComponent {
    constructor(public slideshowService: SlideshowService, private _uiService: UiService, private _el: ElementRef) { }

    private _scrollThrottleTime: number = 200; // in ms
    private _minScroll: number = 50;
    private _lastScrollTime: number = 0;
    
    private _slideIndex: number = 0;

    ngDoCheck(): void {
        if (this._slideIndex != this.slideshowService.slideIndex) {
            this._slideIndex = this.slideshowService.slideIndex;
            this._el.nativeElement.style.setProperty('--reel-index', this._slideIndex);
        }
    }

    onScroll(event: WheelEvent): void {
        const now = Date.now();
        if (now - this._lastScrollTime < this._scrollThrottleTime) return;  // Animation has not finished
        if (Math.abs(event.deltaY) < this._minScroll) return;               // Scroll is too small

        event.preventDefault();
        const delta = event.deltaY;

        if (delta > 0) this.slideshowService.nextSlide();
        else if (delta < 0) this.slideshowService.previousSlide();

        this._lastScrollTime = now;
    }
    
    prevInactive(): boolean {
        return this._slideIndex === 0;
    }

    nextInactive(): boolean {
        return this._slideIndex === this.slideshowService.filteredProjects.length - 1 || this.slideshowService.filteredProjects.length == 0;
    }

    handleStartDateSelection(selection: string): void {
        this.slideshowService.setFilterStartDate(new Date(selection));
        this._onHandleSelection();
    }

    handleEndDateSelection(selection: string): void {
        this.slideshowService.setFilterEndDate(new Date(selection));
        this._onHandleSelection();
    }

    private _onHandleSelection(): void {
        this._uiService.clearFocus();
    }

    getYearsAsStrings(): string[] {
        let years: number[] = this.slideshowService.getAllYears();
        let start: number = years[0];
        let end: number = years[years.length - 1];
        let length: number = start - end + 1;
        return Array.from({ length }, (_, i) => end + i).map((num: number) => num.toString())
    }
}
