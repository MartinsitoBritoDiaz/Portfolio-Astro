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

export interface IHomeProjectsProps {
    projects: [];
}

export interface IFooterProps {
    contact: {
        instagram: string,
        github: string,
        twitter: string,
    };
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

export interface ICertification {
    course: string,
    institute: string,
    accomplishDate: string,
}