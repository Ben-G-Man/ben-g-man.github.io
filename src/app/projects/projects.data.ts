import { Project, ProjectTag } from './project.model';

export const PROJECTS: Project[] = [

    /* ---- Tilda's Sign ---- */
    {
        id: 'tilda-sign',
        title: 'Faux-Neon Sign',
        startDate: new Date(2025, 9, 0, 0, 0, 0, 0),
        endDate: new Date(2025, 9, 0, 0, 0, 0, 0),
        thumbnail: 'projects/tilda-sign-1.jpg',
        description: 'This faux-neon sign was my first endeavour into battery-operated lighting. The finished product comprises a set of LED tube lights held in place by layered laser-cut acrylic and wired to a module which houses the power switch and a 9V battery.',
        tags: [ProjectTag.Laser, ProjectTag.FDM, ProjectTag.Fusion, ProjectTag.Electrical, ProjectTag.Illustrator, ProjectTag.Commission],
        sections: [ ]
    },

    /* ---- Free-Cycle Site ---- */
    {
        id: 'freecycle-site',
        title: 'Freecycle Site',
        startDate: new Date(2024, 7, 0, 0, 0, 0, 0),
        endDate: new Date(2024, 9, 0, 0, 0, 0, 0),
        thumbnail: 'projects/freecycle-site-1.png',
        description: 'I built this website for a third year human computer interaction assignment at The University of Auckland during 2024. This project demonstrates a number of design and accessibility principles, including \'tab navigation\' functionality.',
        tags: [ProjectTag.HTML, ProjectTag.CSS, ProjectTag.JS, ProjectTag.University],
        sections: [ ]
    },
    
    /* ---- FinTrack ---- */
    {
        id: 'fintrack',
        title: 'FinTrack',
        startDate: new Date(2024, 5, 0, 0, 0, 0, 0),
        endDate: new Date(2024, 6, 0, 0, 0, 0, 0),
        thumbnail: 'projects/fintrack-1.png',
        description: 'FinTrack is an open source finance tracker designed and developed by my team and I for submission to a Software Engineering design paper. I built the entire front-end from scratch to reflect the qualities that we want users to associate with the app, those being reliability and security.',
        tags: [ProjectTag.HTML, ProjectTag.CSS, ProjectTag.TS, ProjectTag.React, ProjectTag.University],
        sections: [ ]
    },
    
    /* ---- Smart Power Monitor ---- */
    {
        id: 'power-monitor',
        title: 'Smart Power Monitor',
        startDate: new Date(2025, 3, 0, 0, 0, 0, 0),
        endDate: new Date(2025, 6, 0, 0, 0, 0, 0),
        thumbnail: 'projects/power-monitor-1.png',
        description: 'My part 4 capstone project had me take the lead of a multidisciplinary team to design and build a smart power monitoring system that supports multiple Raspberry-Pi based wireless power monitors. I coordinated the team’s efforts, and built the frontend with usability in mind.',
        tags: [ProjectTag.HTML, ProjectTag.CSS, ProjectTag.TS, ProjectTag.Angular, ProjectTag.University],
        sections: [ ]
    }

];
