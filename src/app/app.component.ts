import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideshowSectionComponent } from './slideshow-section/slideshow-section.component';
import { PersonalSectionComponent } from './personal-section/personal-section.component';
import { MatIconRegistry } from '@angular/material/icon';
import { UiService } from './ui.service';
import { SlideshowService } from './slideshow-section/slideshow.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SlideshowSectionComponent, PersonalSectionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'portfolio-site';

    constructor(
        private matIconReg: MatIconRegistry,
        private uiService: UiService,
    ) { }

    @HostListener('document:click', ['$event.target'])
    onDocumentClick(target: HTMLElement): void {
        this.uiService.clearFocusIfOutside(target);
    }

    ngOnInit(): void {
        this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
    }
}
