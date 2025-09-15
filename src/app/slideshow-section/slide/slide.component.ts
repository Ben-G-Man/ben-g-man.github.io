import { Component, Input } from '@angular/core';
import { Project } from '../../projects/project.model';
import { TagIconComponent } from "./tag-icon/tag-icon.component";

@Component({
  selector: 'app-slide',
  standalone: true,
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss',
  imports: [TagIconComponent]
})
export class SlideComponent {
    @Input() project!: Project;

    projectDatesText: string = "";

    ngOnInit(): void {
        let startDate: Date = this.project.startDate;
        let endDate: Date | null = this.project.endDate;

        if (endDate == null || this._getFormattedDate(startDate) == this._getFormattedDate(endDate)) {
            this.projectDatesText = this._getFormattedDate(startDate);
        } else {
            this.projectDatesText = this._getFormattedDate(startDate) + " → " + this._getFormattedDate(endDate);
        }
    }

    private _getFormattedDate(date: Date): string {
        return date.toLocaleString('default', { month: 'short' }) + " " + date.getFullYear().toString();
    }
}