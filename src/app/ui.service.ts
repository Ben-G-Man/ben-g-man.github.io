import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UiService {
    private _focusedElement: HTMLElement | null = null;

    isMobile = window.matchMedia("(max-width: 799px)").matches;
    isTablet = window.matchMedia("(min-width: 800px) and (max-width: 1099px)").matches;
    isLaptop = window.matchMedia("(min-width: 1100px)").matches;

    private _scrollY = new BehaviorSubject<number>(0);
    scrollY$ = this._scrollY.asObservable();
    
    private _scrollHeight = new BehaviorSubject<number>(32);
    scrollHeight$ = this._scrollHeight.asObservable();
    // Starts with small buffer so that the end of the background cannot be seen while the actual height is retrieved

    toggleFocus(element: HTMLElement): void {
        if (this.isFocused(element)) {
            this._focusedElement = null;
        } else {
            this._focusedElement = element;
        }
    }

    focusElement(element: HTMLElement): void {
        this._focusedElement = element;
    }

    isFocused(element: HTMLElement): boolean {
        return this._focusedElement === element;
    }

    clearFocusIfOutside(target: HTMLElement): void {
        if (this._focusedElement && !this._focusedElement.contains(target)) {
            this._focusedElement = null;
        }
    }

    clearFocus(): void {
        this._focusedElement = null;
    }

    setScrollPosition(scrollY: number, scrollHeight: number): void {
        this._scrollHeight.next(scrollHeight);
        this._scrollY.next(scrollY);
    }
}
