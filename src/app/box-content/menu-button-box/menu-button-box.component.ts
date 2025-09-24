import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-button-box',
  standalone: true,
  imports: [],
  templateUrl: './menu-button-box.component.html',
  styleUrl: './menu-button-box.component.scss'
})
export class MenuButtonBoxComponent {
    private _isMobile = window.matchMedia("(max-width: 799px)").matches;
    openMenu: boolean = false;

    handleTitleClick(): void {
        if (!this._isMobile) return;
        
        if (this.openMenu) this.openMenu = false;
        else this.openMenu = true;
    }
}
