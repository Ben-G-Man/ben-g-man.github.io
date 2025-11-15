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

export enum TagCategory {
    GameDev = "game-dev",
    MakerSpace = "maker-space",
    DevOps = "dev-ops",
    Web = "web",
    Data = "data",
    Default = "default"
}

export const categoryMap: Record<ProjectTag, TagCategory> = {
    [ProjectTag.Unity]: TagCategory.GameDev,
    [ProjectTag.VPS]: TagCategory.GameDev,
    [ProjectTag.HLSL]: TagCategory.GameDev,
    [ProjectTag.ARVR]: TagCategory.GameDev,

    [ProjectTag.FDM]: TagCategory.MakerSpace,
    [ProjectTag.Laser]: TagCategory.MakerSpace,
    [ProjectTag.Cricut]: TagCategory.MakerSpace,
    [ProjectTag.CAD]: TagCategory.MakerSpace,
    [ProjectTag.Fusion]: TagCategory.MakerSpace,
    [ProjectTag.Illustrator]: TagCategory.MakerSpace,
    [ProjectTag.Electrical]: TagCategory.MakerSpace,

    [ProjectTag.Docker]: TagCategory.DevOps,

    [ProjectTag.React]: TagCategory.Web,
    [ProjectTag.Angular]: TagCategory.Web,
    [ProjectTag.HTML]: TagCategory.Web,
    [ProjectTag.CSS]: TagCategory.Web,
    [ProjectTag.TS]: TagCategory.Web,
    [ProjectTag.JS]: TagCategory.Web,

    [ProjectTag.MySQL]: TagCategory.Data,
    [ProjectTag.SQL]: TagCategory.Data,
    [ProjectTag.Matlab]: TagCategory.Data,
    [ProjectTag.R]: TagCategory.Data,
    [ProjectTag.Halide]: TagCategory.Data,

    [ProjectTag.OpenGL]: TagCategory.Default,
    [ProjectTag.GPT]: TagCategory.Default,
    [ProjectTag.PromptEngineering]: TagCategory.Default,
    [ProjectTag.Java]: TagCategory.Default,
    [ProjectTag.JavaFX]: TagCategory.Default,
    [ProjectTag.Cpp]: TagCategory.Default,
    [ProjectTag.C]: TagCategory.Default,
    [ProjectTag.Python]: TagCategory.Default,
    [ProjectTag.Commission]: TagCategory.Default,
    [ProjectTag.University]: TagCategory.Default,
    [ProjectTag.MeshLab]: TagCategory.Default,
    [ProjectTag.DataProcessing]: TagCategory.Default,
    [ProjectTag.PixelArt]: TagCategory.Default,
    [ProjectTag.Modeling]: TagCategory.Default,
    [ProjectTag.Csharp]: TagCategory.Default,
    [ProjectTag.Kivy]: TagCategory.Default,
    [ProjectTag.PHP]: TagCategory.Default
};

export const tagsByCategory: Record<TagCategory, ProjectTag[]> =
  Object.values(TagCategory).reduce((acc, cat) => {
    acc[cat] = Object.entries(categoryMap)
      .filter(([_, c]) => c === cat)
      .map(([t]) => t as ProjectTag);
    return acc;
  }, {} as Record<TagCategory, ProjectTag[]>);


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