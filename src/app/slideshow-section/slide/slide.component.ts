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
}