import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WindowSizeService {
    isMobile = window.matchMedia("(max-width: 799px)").matches;
    isTablet = window.matchMedia("(min-width: 800px) and (max-width: 1099px)").matches;
    isLaptop = window.matchMedia("(min-width: 1100px)").matches;
}