import { StringItem } from './FeatureTypes';

export interface LocationAccreditation {
    locationAccreditationName: StringItem;
}

export interface LocationAccreditationItem {
    id: string;
    name: string;
    url: string;
    features: {
        locationAccreditation: LocationAccreditation;
    }
}