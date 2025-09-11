import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideshowSectionComponent } from './slideshow-section/slideshow-section.component';
import { PersonalSectionComponent } from './personal-section/personal-section.component';
import { MatIconRegistry } from '@angular/material/icon';

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
    private matIconReg: MatIconRegistry
  ) {}

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
