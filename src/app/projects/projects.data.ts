import { Project, ProjectTag } from './project.model';

export const PROJECTS: Project[] = [
{
        id: 'tilda-neon-sign',
        title: 'Tilda Neon Sign',
        startDate: new Date(2025,9,0,0,0,0,0),
        endDate: new Date(2025,9,0,0,0,0,0),
        thumbnail: 'projects/tilda-neon-sign-1.png',
        description: 'This faux-neon sign was my first endeavour into battery-operated lighting. The finished product comprises a set of LED tube lights held in place by layered laser-cut acrylic and wired to a module which houses the power switch and a 5V battery.',
        tags: [ProjectTag.Commission, ProjectTag.Electrical, ProjectTag.FDM, ProjectTag.Laser, ProjectTag.CAD, ProjectTag.Fusion, ProjectTag.Illustrator],
        sections: [ ]
    },
{
        id: 'fintrack',
        title: 'FinTrack',
        startDate: new Date(2024,5,0,0,0,0,0),
        endDate: new Date(2024,6,0,0,0,0,0),
        thumbnail: 'projects/fintrack-1.png',
        description: 'FinTrack is an open source finance tracker designed and developed by my team and I for submission to a Software Engineering design paper. I built the entire front-end from scratch to reflect the qualities that we want users to associate with the app, those being reliability and security.',
        tags: [ProjectTag.University, ProjectTag.React, ProjectTag.HTML, ProjectTag.CSS, ProjectTag.TS, ProjectTag.SQL],
        sections: [ ]
    },
{
        id: 'smart-power-monitor',
        title: 'Smart Power Monitor',
        startDate: new Date(2025,3,0,0,0,0,0),
        endDate: new Date(2025,6,0,0,0,0,0),
        thumbnail: 'projects/smart-power-monitor-1.png',
        description: 'My part 4 capstone project had me take the lead of a multidisciplinary team to design and build a smart power monitoring system that supports multiple Raspberry-Pi based wireless power monitors. I coordinated the team’s efforts, and built the frontend with usability in mind.',
        tags: [ProjectTag.University, ProjectTag.Docker, ProjectTag.Angular, ProjectTag.HTML, ProjectTag.CSS, ProjectTag.TS],
        sections: [ ]
    },
{
        id: 'freecycle-site',
        title: 'Freecycle Site',
        startDate: new Date(2024,7,0,0,0,0,0),
        endDate: new Date(2024,9,0,0,0,0,0),
        thumbnail: 'projects/prototype-freecycle-site-1.png',
        description: 'I built this website for a third year human computer interaction assignment at The University of Auckland during 2024. This project demonstrates a number of design and accessibility principles, including ’tab navigation’ functionality.',
        tags: [ProjectTag.University, ProjectTag.HTML, ProjectTag.CSS, ProjectTag.JS],
        sections: [ ]
    },
{
        id: '1to1-human-brain-model',
        title: '1:1 Brain Model',
        startDate: new Date(2025,4,0,0,0,0,0),
        endDate: new Date(2025,4,0,0,0,0,0),
        thumbnail: 'projects/1to1-human-brain-model-1.png',
        description: 'A colleague from the Center for Brain Research (CBR) approached me with raw MRI data from a recent brain scan, curious about creating a display piece using the data. After some trial and error I devised a process to isolate all ’solid’ brain tissue from the image stack and convert it into a mesh before cleaning it up with MeshLab. An inset was made in the mesh for a laser cut acrylic stand, and the model was printed in two parts on a Bambu Lab X1 Carbon.',
        tags: [ProjectTag.Commission, ProjectTag.MeshLab, ProjectTag.DataProcessing, ProjectTag.FDM, ProjectTag.Laser, ProjectTag.Fusion],
        sections: [ ]
    },
{
        id: 'chat-gpt-powered-escape-room',
        title: 'Chat-GPT Powered Escape Room',
        startDate: new Date(2023,2,0,0,0,0,0),
        endDate: new Date(2023,5,0,0,0,0,0),
        thumbnail: 'projects/chat-gpt-powered-escape-room-1.png',
        description: 'During second year Software Design at UoA, I was tasked with designing and implementing an escape room video game built in Java, leveraging the Chat-GPT 3 API to create the illusion of an intelligent ’game master’ that the player must interact with in order to progress. After creating a proof of concept, I took charge of a three person team to create, test, and polish a fun and challenging escape room game which pitches the player against a cold, evil AI. While awaiting a response from the API takes time, we used this to our advantage, transforming it into a gameplay feature which allows the player to stall the room’s power by distracting the AI with complex assignments and red herrings.',
        tags: [ProjectTag.GPT, ProjectTag.PromptEngineering, ProjectTag.Java, ProjectTag.JavaFX, ProjectTag.University],
        sections: [ ]
    },
{
        id: 'rainbow-room-lock-cover',
        title: 'RENG Lock Cover',
        startDate: new Date(2025,9,0,0,0,0,0),
        endDate: new Date(2025,9,0,0,0,0,0),
        thumbnail: 'projects/rainbow-room-lock-cover-1.png',
        description: 'The Rainbow Room is a queer friendly space inside the UoA Engineering Building. As a Rainbow Engineering executive, I was tasked with maintaining and developing the Rainbow Room to suit its users. For over half a year the entrance to the rainbow room was accompanied by a poorly-written ’do not lock’ sign instructing cleaners to leave the room unlocked, undermining our efforts to present the room as a professional well-maintained space. I took it upon myself to fix this by designing and producing a much more tidy 3D printed solution.',
        tags: [ProjectTag.Commission, ProjectTag.FDM, ProjectTag.Laser, ProjectTag.CAD, ProjectTag.Fusion, ProjectTag.Illustrator],
        sections: [ ]
    },
{
        id: 'basic-drop-shadow-shader',
        title: 'Basic Drop Shadow Shader',
        startDate: new Date(2022,10,0,0,0,0,0),
        endDate: new Date(2023,2,0,0,0,0,0),
        thumbnail: 'projects/basic-drop-shadow-shader-1.png',
        description: 'A HLSL shader which creates a customizable drop-shadow behind the target entity / image. The shadow can be moved vertically and horizontally, and its colour and opacity can be changed.',
        tags: [ProjectTag.HLSL],
        sections: [ ]
    },
{
        id: 'rgb-pattern-shader',
        title: 'RGB Pattern Shader',
        startDate: new Date(2022,10,0,0,0,0,0),
        endDate: new Date(2023,2,0,0,0,0,0),
        thumbnail: 'projects/rgb-pattern-shader-1.png',
        description: 'This HLSL shader reduces the R, G, and B channels across a target image based on a repeating input pattern. The pattern will be repeated ’pixel-for-pixel’ across the image, and the R, G, and B channels of each pixel will be reduced to a percentage of the original colour value based on the corresponding RBG colour in the input pattern.',
        tags: [ProjectTag.HLSL],
        sections: [ ]
    },
{
        id: 'red-death-shader',
        title: 'Red Death Shader',
        startDate: new Date(2022,10,0,0,0,0,0),
        endDate: new Date(2023,2,0,0,0,0,0),
        thumbnail: 'projects/red-death-shader-1.png',
        description: 'This HLSL shader reads from the Animation Coefficient value to reduce the blue and green colour channels to zero simultaneously before draining the red channel to create a gnarly ’fade-to-death’ transition.',
        tags: [ProjectTag.HLSL],
        sections: [ ]
    },
{
        id: 'colour-drain-shader',
        title: 'Colour Drain Shader',
        startDate: new Date(2022,10,0,0,0,0,0),
        endDate: new Date(2023,2,0,0,0,0,0),
        thumbnail: 'projects/colour-drain-shader-1.png',
        description: 'This HLSL shader drains the colour form an image linearly based on an input parameter.',
        tags: [ProjectTag.HLSL],
        sections: [ ]
    },
{
        id: 'hunger-(kiwijam-2023)',
        title: 'Hunger (KiwiJam 2023)',
        startDate: new Date(2023,5,0,0,0,0,0),
        endDate: new Date(2023,5,0,0,0,0,0),
        thumbnail: 'projects/hunger-(kiwijam-growth)-1.png',
        description: 'During my first national game jam (KiwiJam 2023), I rounded up a team and got to work over 48 hours to self-teach Unity, design, test, and refine a dark reverse-horror puzzle game which places the player in the shoes of a lovecraftian horror capable of draining the life-force from helpless scientists. While learning the Unity workflow, I involved myself with developing the core idea, art, assets, UI, puzzle design, and main mechanics.',
        tags: [ProjectTag.Csharp, ProjectTag.PixelArt, ProjectTag.Modeling, ProjectTag.Unity],
        sections: [ ]
    },
{
        id: 'local-covid-19-contact-tracker',
        title: 'Local COVID-19 Contact Tracker',
        startDate: new Date(2021,6,0,0,0,0,0),
        endDate: new Date(2021,10,0,0,0,0,0),
        thumbnail: 'projects/local-covid-19-contact-tracker-1.png',
        description: 'Right-Track is a lightweight application aimed at schools, churches, and other small communities for post-lockdown COVID-19 contact tracing in New Zealand. It stores user accounts and activity locally in TXT files, provides rotating COVID-19 safety advice, and displays real-time global statistics from the Johns Hopkins database. An admin account enables retrieval of user or location-specific activity. A settings page supports account modification and deletion. The UI cycles through five time-based themes for viewing comfort.\nNOTE: This app was built to be submitted as a Highschool assignment when I was 17, the quality of my code and my ability to write comments has improved dramatically since then.',
        tags: [ProjectTag.Python, ProjectTag.Kivy],
        sections: [ ]
    },
{
        id: 'live,-laugh,-lose-(ggj-2024)',
        title: 'Live, Laugh, Lose (GGJ 2024)',
        startDate: new Date(2024,2,0,0,0,0,0),
        endDate: new Date(2024,2,0,0,0,0,0),
        thumbnail: 'projects/live,-laugh,-lose-(global-game-jam-2024)-1.png',
        description: 'During the 2024 Global Game Jam, I lead the software development efforts on a ’make me laugh’ themed 48 hour video game challenge. My idea was simple; the player is at a funeral, unfortunately hilarious things happen periodically, and the player has to find something serious to focus on before their ’laugh meter’ expires and they distastefully break out laughing. Live, laugh = lose. I also took over UI and sound design.',
        tags: [ProjectTag.PixelArt, ProjectTag.Csharp, ProjectTag.Unity],
        sections: [ ]
    },
{
        id: 'face-painting-site',
        title: 'Face Painting Site',
        startDate: new Date(2020,6,0,0,0,0,0),
        endDate: new Date(2020,10,0,0,0,0,0),
        thumbnail: 'projects/face-painting-site-1.png',
        description: 'I created this simple face painting website during 2020 for a friend to upskill in HTML and CSS. The site has had many of its images stripped and references to the original website owner removed for privacy reasons.',
        tags: [ProjectTag.Commission, ProjectTag.HTML, ProjectTag.CSS, ProjectTag.JS, ProjectTag.PHP],
        sections: [ ]
    },
{
        id: 'toku-hanga',
        title: 'Toku Hanga',
        startDate: new Date(2025,5,0,0,0,0,0),
        endDate: null,
        thumbnail: 'projects/toku-hanga-1.png',
        description: 'Tōku Hanga is a Unity-based Android and IOS augmented reality app which allows users to place digital objects in their local public spaces with sub-cm precision, enabling communities to collaborate on public space design. NOTE: This app is currently in development, no releases are available at this time.',
        tags: [ProjectTag.Csharp, ProjectTag.Unity, ProjectTag.VPS, ProjectTag.ARVR],
        sections: [ ]
    }
];
