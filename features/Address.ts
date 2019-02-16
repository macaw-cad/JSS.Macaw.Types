import { StringItem } from './FeatureTypes';
import { Geography } from './Business';

export default interface Address {
    addressLocationLine1: StringItem;
    addressLocationLine2: StringItem;
    addressLocationLine3: StringItem;
    addressLocationLine4: StringItem;
    addressLocationLine5: StringItem;
    addressLocationCity: StringItem;
    addressLocationCountrySelector: {
        id: string,
        name: string,
        url: string,
        features: {
            geography: Geography
        }
    } | null
}