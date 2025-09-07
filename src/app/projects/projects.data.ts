import { Project, ProjectTag } from './project.model';

export const PROJECTS: Project[] = [

  {
    id: 'slideshow-portfolio',
    title: 'Slideshow Portfolio',
    thumbnail: 'placeholder.png',
    description: 'An Angular-based slideshow portfolio with scroll hijacking.',
    tags: [ProjectTag.HTML, ProjectTag.CSS, ProjectTag.Angular],
    sections: [
      {
        image: 'overview.png',
        text: 'This section explains the core slideshow logic and user interaction.'
      },
      {
        image: 'code.png',
        text: 'The Angular/TypeScript implementation for smooth scroll animation.'
      }
    ]
  },

  {
    id: 'test',
    title: 'Test Item',
    thumbnail: 'placeholder.png',
    description: 'An Angular-based slideshow portfolio with scroll hijacking.',
    tags: [ProjectTag.ARVR, ProjectTag.Angular, ProjectTag.C, ProjectTag.CAD, ProjectTag.Unity],
    sections: [
      {
        image: 'overview.png',
        text: 'This section explains the core slideshow logic and user interaction.'
      },
      {
        image: 'code.png',
        text: 'The Angular/TypeScript implementation for smooth scroll animation.'
      }
    ]
  }

];
