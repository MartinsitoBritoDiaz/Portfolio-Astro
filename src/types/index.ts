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
export interface ICertificationsProps {
    certifications: ICertification[];
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
    projectType?: "client" | "personal",
    clientProject?: boolean,
    clientId?: string,
    clientName?: string,
    role?: string,
    impact?: string,
}

export interface ICourse {
    course: string,
    institute: string,
    accomplishDate: string,
}

export interface ICertification {
    title: string,
    description: string,
    earnedOn: string,
    expiresOn: string,
    credentialID: string,
    certificationNumber: string,
    verificationUrl: string,
    logo: string
}

export interface IClient {
    id: string,
    name: string,
    logo: string,
    industry: string,
    website?: string,
    description?: string,
    engagementContext?: string,
    projects: string[], // Array of project names that belong to this client
}

export interface IClientProps {
    client: IClient,
}

export interface IClientsProps {
    clients: IClient[],
}