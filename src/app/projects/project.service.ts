import { Injectable } from '@angular/core';
import { PROJECTS } from './projects.data';
import { Project } from './project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  getProjects(): Project[] {
    return PROJECTS;
  }

  getProjectById(id: string): Project | undefined {
    return PROJECTS.find(p => p.id === id);
  }
}