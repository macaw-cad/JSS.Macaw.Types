import { Image, StringItem, Link } from './FeatureTypes';

export default interface NavigationItem {
    id?: string;
    title?: StringItem;
    text?: StringItem | null;
    iconClass?: Icon | null | {},
    link?: Link | null
    icon?: any // add type later on
    image?: Image | null
    items?: NavigationItem[]
    active?: StringItem
}

export type Icon = {
    type?: string;
    value: string;
    id?: string;
    name?: string;
}