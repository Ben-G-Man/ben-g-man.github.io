import { Component, Input } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { SlideshowService } from '../slideshow.service';
import { UiService } from '../../ui.service';
import { DropDownContainerComponent } from "../../generic/drop-down-container/drop-down-container.component";

@Component({
  selector: 'app-slideshow-filter',
  standalone: true,
  imports: [MatIcon, DropDownContainerComponent],
  templateUrl: './slideshow-filter.component.html',
  styleUrl: './slideshow-filter.component.scss'
})
export class SlideshowFilterComponent {
    constructor(public slideshowService: SlideshowService, public uiService: UiService) { }

    @Input() label!: string;
}
