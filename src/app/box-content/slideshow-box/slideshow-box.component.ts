import { Component, ElementRef } from '@angular/core';
import { SlideshowService } from './slideshow.service';
import { UiService } from '../../ui.service';
import { MatIcon } from "@angular/material/icon";
import { SlideComponent } from "./slide/slide.component";

@Component({
  selector: 'app-slideshow-box',
  standalone: true,
  imports: [MatIcon, SlideComponent],
  templateUrl: './slideshow-box.component.html',
  styleUrl: './slideshow-box.component.scss'
})
export class SlideshowBoxComponent {
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
}