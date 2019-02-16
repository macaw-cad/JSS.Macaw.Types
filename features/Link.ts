export default interface Link {
    type: string;
    url: string;
    alt?: string | null;
    target?: string | undefined;
    text?: string;
}

export interface LinkText {
    value?: string;
}
