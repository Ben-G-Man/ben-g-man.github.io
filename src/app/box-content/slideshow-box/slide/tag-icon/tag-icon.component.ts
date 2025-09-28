import { Component, Input } from '@angular/core';
import { Category, categoryMap, ProjectTag, tagsByCategory } from '../../../../projects/project.model';

@Component({
  selector: 'app-tag-icon',
  standalone: true,
  templateUrl: './tag-icon.component.html',
  styleUrl: './tag-icon.component.scss'
})

export class TagIconComponent {
  @Input() tag!: ProjectTag;

  public getTagCategory(): Category {
    return categoryMap[this.tag] ?? Category.Default;
  }

  public static getTagsForCategory(category: Category): ProjectTag[] {
    return tagsByCategory[category] ?? [];
  }
}