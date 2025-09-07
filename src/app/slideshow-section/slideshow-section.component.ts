import { Component } from '@angular/core';
import { Project } from '../projects/project.model';
import { ProjectService } from '../projects/project.service';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-slideshow-section',
  standalone: true,
  imports: [SlideComponent],
  templateUrl: './slideshow-section.component.html',
  styleUrl: './slideshow-section.component.scss'
})
export class SlideshowSectionComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
