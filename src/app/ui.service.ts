import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private _focusedElement: HTMLElement | null = null;

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
}
