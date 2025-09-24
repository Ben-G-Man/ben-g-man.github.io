import { Injectable } from '@angular/core';
import { WindowSizeService } from './window-size-service';

@Injectable({
    providedIn: 'root'
})
export class FrostingService {
    constructor(public windowSizeService: WindowSizeService) {}

    public openMenu: boolean = false;

    toggle(): void {
        if (this.windowSizeService.isLaptop) return;
        
        if (this.openMenu) this.openMenu = false;
        else this.openMenu = true;
    }
}