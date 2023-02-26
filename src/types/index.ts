export interface IBaseHead {
    title: string;
    description: string;
    image?: string;
}

export interface IHeroProps {
    name: string;
    degree: string;
    about: string;
}

export interface IProject {
    name: string,
    description: string,
    technologies: string[],
    isDeploy: boolean,
    url: string,
    code: string,
    liveSite: string,
    image: string,
}