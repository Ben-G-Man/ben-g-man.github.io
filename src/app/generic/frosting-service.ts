import { Injectable } from '@angular/core';
import { UiService } from '../ui.service';

@Injectable({
    providedIn: 'root'
})
export class FrostingService {
    constructor(public uiService: UiService) {}

    public openMenu: boolean = false;

    toggle(): void {
        if (this.uiService.isLaptop) return;
        
        if (this.openMenu) this.openMenu = false;
        else this.openMenu = true;
    }
}