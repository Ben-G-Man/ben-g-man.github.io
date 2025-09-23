import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-personal-section',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './personal-section.component.html',
  styleUrl: './personal-section.component.scss'
})
export class PersonalSectionComponent {
    private _isMobile = window.matchMedia("(max-width: 767px)").matches;
    openMenu: boolean = false;

    handleTitleClick(): void {
        if (!this._isMobile) return;
        
        if (this.openMenu) this.openMenu = false;
        else this.openMenu = true;
    }
}