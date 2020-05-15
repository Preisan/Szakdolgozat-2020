export enum Root_E {
    incElements = 'incElements/',
    home = 'home/'
}

export interface Example {
    html?: string;
    ts?: string;
    css?: string;
}

export interface SaveData {
    root: Root_E;
    path: string;
    value: any;
}

export interface Subject {
    title: string;
    text?: string;
}

export interface IncElement {
    name: string;
    isVisible: boolean;
    description?: string;
    overview?: Subject[];
    modules?: IncModule[];
}

export interface IncProperty {
    name: string;
    description?: string;
}

export interface IncComponent {
    name: string;
    selector?: string;
    properties?: IncProperty[];
    example?: Example;
}

export interface IncModule {
    name: string;
    importFrom?: string;
    components?: IncComponent[];
}
