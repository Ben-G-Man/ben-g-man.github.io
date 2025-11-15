import { Component, Input } from '@angular/core';
import { TagCategory, categoryMap, ProjectTag } from '../../../../projects/project.model';

@Component({
  selector: 'app-tag-icon',
  standalone: true,
  templateUrl: './tag-icon.component.html',
  styleUrl: './tag-icon.component.scss'
})

export class TagIconComponent {
  @Input() tag!: ProjectTag

  public getTagCategory(): TagCategory {
    return categoryMap[this.tag] ?? TagCategory.Default;
  }
}