import { Component } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { FrostingService } from '../../generic/frosting-service';

@Component({
  selector: 'app-menu-button-box',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './menu-button-box.component.html',
  styleUrl: './menu-button-box.component.scss'
})
export class MenuButtonBoxComponent {
    constructor(public frostingService: FrostingService) {}

    handleTitleClick(): void {
        this.frostingService.toggle();
    }
}
