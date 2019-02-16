import Features from '../Features';
import { StringItem } from './FeatureTypes';
import { Link } from './FeatureTypes';

export interface RelatedProduct {
    id: string;
    name: string;
    url: string;
    features: Features;
}

type lookupList = {
    type: string,
    id: string,
    key: string,
    value: string
}

interface Sectors {
    items: lookupList[];
}

export default interface Product {
    productRelatedProducts?: RelatedProduct[];
    relatedProductsTitle?: StringItem;
    relatedProductsSubTitle?: StringItem;
    relatedProductsLink?: Link;
    productMarketSectors?: Sectors;
    productProductSectors?: Sectors;
}