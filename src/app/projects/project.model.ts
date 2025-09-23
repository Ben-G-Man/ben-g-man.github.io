export enum ProjectTag {
    /* -- Ungrouped -- */
    OpenGL = 'OpenGL',
    GPT = 'Chat GPT',
    PromptEngineering = 'Prompt Engineering',
    Java = 'Java',
    JavaFX = 'JavaFX',
    Cpp = 'C++',
    C = 'C',
    Python = 'Python',
    Commission = 'Commission',
    University = 'University',
    Electrical = 'Circuit Work',
    MeshLab = 'Mesh Lab',
    DataProcessing = 'Raw Data Processing',
    PixelArt = 'Pixel Art',
    Modeling = '3D Modeling',
    Csharp = 'C#',
    Kivy = 'Kivy',

    /* -- Maker Space -- */
    FDM = '3D Printing',
    Laser = 'Laser Cutter',
    Cricut = 'Cricut',
    CAD = 'CAD',
    Fusion = 'Fusion360',
    Illustrator = 'Adobe Illustrator',
    

    /* -- Game Dev -- */
    Unity = 'Unity',
    VPS = 'Niantic VPS',
    HLSL = 'HLSL',
    ARVR = 'AR / VR',

    /* -- DevOps -- */
    Docker = 'Docker',

    /* -- Web-Dev -- */
    React = 'React',
    Angular = 'Angular',
    HTML = 'HTML5',
    CSS = 'CSS3',
    TS = 'TypeScript',
    JS = 'JavaScript',
    PHP = 'PHP',

    /* -- Data -- */
    MySQL = 'MySQL',
    SQL = 'SQL',
    Matlab = 'MATLAB',
    R = 'R',
    Halide = 'Halide'
}

export interface ProjectSection {
    image: string;
    text: string;
}

export interface Project {
    id: string; // unique key for routing
    title: string;
    startDate: Date;
    endDate: Date | null;
    thumbnail: string;
    description: string;
    tags: ProjectTag[];
    sections: ProjectSection[];
}