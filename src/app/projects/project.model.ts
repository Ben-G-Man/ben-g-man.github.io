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

export enum Category {
    GameDev = "game-dev",
    MakerSpace = "maker-space",
    DevOps = "dev-ops",
    Web = "web",
    Data = "data",
    Default = "default"
}

export const categoryMap: Record<ProjectTag, Category> = {
    [ProjectTag.Unity]: Category.GameDev,
    [ProjectTag.VPS]: Category.GameDev,
    [ProjectTag.HLSL]: Category.GameDev,
    [ProjectTag.ARVR]: Category.GameDev,

    [ProjectTag.FDM]: Category.MakerSpace,
    [ProjectTag.Laser]: Category.MakerSpace,
    [ProjectTag.Cricut]: Category.MakerSpace,
    [ProjectTag.CAD]: Category.MakerSpace,
    [ProjectTag.Fusion]: Category.MakerSpace,
    [ProjectTag.Illustrator]: Category.MakerSpace,
    [ProjectTag.Electrical]: Category.MakerSpace,

    [ProjectTag.Docker]: Category.DevOps,

    [ProjectTag.React]: Category.Web,
    [ProjectTag.Angular]: Category.Web,
    [ProjectTag.HTML]: Category.Web,
    [ProjectTag.CSS]: Category.Web,
    [ProjectTag.TS]: Category.Web,
    [ProjectTag.JS]: Category.Web,

    [ProjectTag.MySQL]: Category.Data,
    [ProjectTag.SQL]: Category.Data,
    [ProjectTag.Matlab]: Category.Data,
    [ProjectTag.R]: Category.Data,
    [ProjectTag.Halide]: Category.Data,

    [ProjectTag.OpenGL]: Category.Default,
    [ProjectTag.GPT]: Category.Default,
    [ProjectTag.PromptEngineering]: Category.Default,
    [ProjectTag.Java]: Category.Default,
    [ProjectTag.JavaFX]: Category.Default,
    [ProjectTag.Cpp]: Category.Default,
    [ProjectTag.C]: Category.Default,
    [ProjectTag.Python]: Category.Default,
    [ProjectTag.Commission]: Category.Default,
    [ProjectTag.University]: Category.Default,
    [ProjectTag.MeshLab]: Category.Default,
    [ProjectTag.DataProcessing]: Category.Default,
    [ProjectTag.PixelArt]: Category.Default,
    [ProjectTag.Modeling]: Category.Default,
    [ProjectTag.Csharp]: Category.Default,
    [ProjectTag.Kivy]: Category.Default,
    [ProjectTag.PHP]: Category.Default
};

export const tagsByCategory: Record<Category, ProjectTag[]> = Object.values(Category)
  .reduce((acc, cat) => {
    acc[cat] = Object.entries(categoryMap)
      .filter(([_, c]) => c === cat)
      .map(([t]) => Number(t) as unknown as ProjectTag);
    return acc;
  }, {} as Record<Category, ProjectTag[]>);

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