import { Content, Image } from '../features/FeatureTypes';

export default interface ProductInfo {
    product: {
        features: {
            richContent: {
                richContentMedium: {
                    value: string;                     
                }
            },
            product: {
                productProductSectors: {
                    items: ProductSectors[];                
                }
            },
            content: Content;
        }
    }
};

type ProductSectors = {
    value?: string;
}

type ProductSearchResultFields = {
    templatename?: string,
    contenttitle?: string,
    productmarketsectors?: string,
    productproductsectors?: string,
    contentimage?: string,
    itemurl?: string
}

export interface ProductSearchResult {
    id: string;
    name: string;
    fields: ProductSearchResultFields;
}