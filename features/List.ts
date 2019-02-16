import { StringItem, Link, IntItem, BoolItem, NumberItem } from './FeatureTypes';
import Features from '../Features';

export default interface List {
    listTitle: StringItem;
    listLink?: Link | null;
    listLinkText?: StringItem;
    listAbstract?: StringItem;
    listFieldName?: StringItem;
    listFieldItem?: StringItem;
    listItems?: StringItem;
    listQueryItem?: StringItem;
    listRoot?: StringItem;
    listRootDepth?: NumberItem;
    items: ListItem[];
    listItemsPerRow?: IntItem;
    listItemsCarrouselView?: BoolItem;
}

export interface ListItem {
    id: string;
    name: string;
    url: string;
    features: Features;
}