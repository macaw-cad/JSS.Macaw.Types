
export interface Teaser {
    title: StringItem;
    subtitle: StringItem;
    abstract: StringItem;
    richText: StringItem;
    icon: string | null;
    image: Image | null ;
    video: Video | null;
    link: Link | null;
    linkText?: StringItem;
}

export interface DictionaryEntry {
    path?: string;
    id?: string;
    name?: string;
    key: string;
    phrase: string;
}

export interface LookupItem {
    type?: string;
    id?: string;
    name?: string;
    key: string;
    value: string;
}

export interface StringItem {
    type?: string;
    value: string;
}

export interface BoolItem {
    type: string;
    value: string;
}

export interface IntItem {
    type: string;
    value: number
}

export interface NumberItem {
    type?: string;
    value: number;
}

export interface Content {
    contentTitle: StringItem;
    contentSubTitle?: StringItem;
    contentAbstract: StringItem;
    contentImage: Image | null;
    contentType?: StringItem | null | {};
    renderFieldValue?: StringItem | null;
}

export interface Link {
    type: string;
    url: string;
    alt: string | null;
    target?: string | null;
    text?: string;
}

export interface Image {
    type: string;
    alt: string;
    default: string;    
    sizes?: {   
        [key: string]: string
    } | null;
}

export interface Video {
    type: string;
    externalVideoType: string;
    url: string;
    image: Image;
}

export interface Publication {
    author: StringItem;
    date: StringItem | null; 
    revision?: any|null;
}

export interface OpenGraph {
    abstract: StringItem;
    image: Image|null;
    title: StringItem | null; 
    type: any|null;
}

export interface Seo {
    seoTitle: StringItem;
    seoAbstract: StringItem;
    seoKeywords: StringItem;
    seoCanonicalTag: StringItem|null;
    seoPriority: LookupItem;
    seoChangeFrequency: LookupItem;
    seoIndexProperty: LookupItem; 
    seoLanguageEquivalents: any|null;
}