import { Project, ProjectTag } from './project.model';

export const PROJECTS: Project[] = [

    {
        id: 'slideshow-portfolio',
        title: 'Slideshow Portfolio',
        startDate: new Date(2025, 9, 26, 0, 0, 0, 0),
        endDate: null,
        thumbnail: 'placeholder.png',
        description: '2025',
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
        startDate: new Date(2024, 9, 26, 0, 0, 0, 0),
        endDate: null,
        thumbnail: 'placeholder.png',
        description: '2024',
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
    },

    {
        id: 'test',
        title: 'Test Item',
        startDate: new Date(2022, 9, 26, 0, 0, 0, 0),
        endDate: null,
        thumbnail: 'placeholder.png',
        description: '2022',
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
    },

    {
        id: 'test',
        title: 'Test Item',
        startDate: new Date(2025, 1, 0, 0, 0, 0, 0),
        endDate: null,
        thumbnail: 'placeholder.png',
        description: 'early 2025.',
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
    },

    {
        id: 'test',
        title: 'Test Item',
        startDate: new Date(2024, 1, 0, 0, 0, 0, 1),
        endDate: null,
        thumbnail: 'placeholder.png',
        description: 'Early 2024',
        tags: [ProjectTag.OpenGL, ProjectTag.GPT, ProjectTag.Java, ProjectTag.Cpp, ProjectTag.C, ProjectTag.Python, ProjectTag.FDM, ProjectTag.Laser, ProjectTag.Cricut, ProjectTag.CAD, ProjectTag.Fusion, ProjectTag.Illustrator, ProjectTag.Unity, ProjectTag.VPS, ProjectTag.HLSL, ProjectTag.ARVR, ProjectTag.Docker, ProjectTag.React, ProjectTag.Angular, ProjectTag.HTML, ProjectTag.CSS, ProjectTag.TS, ProjectTag.JS, ProjectTag.MySQL, ProjectTag.SQL, ProjectTag.Matlab, ProjectTag.R, ProjectTag.Halide],
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
