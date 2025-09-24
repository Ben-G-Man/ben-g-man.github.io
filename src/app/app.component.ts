import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { UiService } from './ui.service';
import { GreetingsBoxComponent } from "./box-content/greetings-box/greetings-box.component";
import { LinksBoxComponent } from "./box-content/links-box/links-box.component";
import { FiltersBoxComponent } from "./box-content/filters-box/filters-box.component";
import { SlideshowBoxComponent } from "./box-content/slideshow-box/slideshow-box.component";
import { MenuButtonBoxComponent } from "./box-content/menu-button-box/menu-button-box.component";
import { FrostingService } from './generic/frosting-service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, GreetingsBoxComponent, LinksBoxComponent, FiltersBoxComponent, SlideshowBoxComponent, MenuButtonBoxComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'portfolio-site';

    constructor(
        private matIconReg: MatIconRegistry,
        private uiService: UiService,
        public frostingService: FrostingService
    ) { }

    @HostListener('document:click', ['$event.target'])
    onDocumentClick(target: HTMLElement): void {
        this.uiService.clearFocusIfOutside(target);
    }

    ngOnInit(): void {
        this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    }
}
