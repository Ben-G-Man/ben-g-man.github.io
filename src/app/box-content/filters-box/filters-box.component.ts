import { Component } from '@angular/core';
import { UiService } from '../../ui.service';
import { SlideshowService } from '../slideshow-box/slideshow.service';
import { SlideshowFilterComponent } from "./slideshow-filter/slideshow-filter.component";
import { DropDownListComponent } from "../../generic/drop-down-list/drop-down-list.component";
import { ProjectTag } from '../../projects/project.model';

@Component({
    selector: 'app-filters-box',
    standalone: true,
    imports: [SlideshowFilterComponent, DropDownListComponent],
    templateUrl: './filters-box.component.html',
    styleUrl: './filters-box.component.scss'
})
export class FiltersBoxComponent {
    constructor(public slideshowService: SlideshowService, private _uiService: UiService) { }

    /* ---- Tags ---- */

    allTags: ProjectTag[] = Object.values(ProjectTag);
    selectedTags: ProjectTag[] = this.allTags;

    toggle(value: ProjectTag, event: Event) {
        const checked = (event.target as HTMLInputElement).checked;
        if (checked) {
            this.selectedTags.push(value);
        } else {
            this.selectedTags = this.selectedTags.filter(v => v !== value);
        }

        this.slideshowService.setFilterTags(this.selectedTags);
    }

    /* ---- Dates ---- */

    handleStartDateSelection(selection: string): void {
        this.slideshowService.setFilterStartDate(new Date(selection));
        this._onHandleSelection();
    }

    handleEndDateSelection(selection: string): void {
        this.slideshowService.setFilterEndDate(new Date(selection));
        this._onHandleSelection();
    }

    private _onHandleSelection(): void {
        this._uiService.clearFocus();
    }

    getYearsAsStrings(): string[] {
        let years: number[] = this.slideshowService.getAllYears();
        let start: number = years[0];
        let end: number = years[years.length - 1];
        let length: number = start - end + 1;
        return Array.from({ length }, (_, i) => end + i).map((num: number) => num.toString())
    }

    getTagsText(): string {
        return 'custom';
    }

    getStartDateText(): string {
        let text: string = this.slideshowService.filterStartYear.toString();

        if (!this._uiService.isLaptop) {
            text = "From " + text;
        }

        return text;
    }

    getEndDateText(): string {
        let text: string = this.slideshowService.filterEndYear.toString()

        if (!this._uiService.isLaptop) {
            text = "To " + text;
        }

        return text;
    }
}