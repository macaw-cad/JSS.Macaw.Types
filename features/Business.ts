import { StringItem, Content } from './FeatureTypes';
import RelatedItems from './RelatedItems';
import Address from './Address';
import { Geo } from './Geo';
import Contact from './Contact';
import { Location } from './Location';

export interface Geography {
    geographyCode: StringItem;
    geographyLocation: StringItem;
    geographyName: StringItem;
    geographyType: StringItem;
}

export interface Office {
    id: string;
    name: string;
    url: string;
    features: {
        address: Address;
        contact: Contact;
        geo: Geo;
        relatedItems: RelatedItems;
        location: Location;
        content: Content;
    }
}

export default interface Business {
    office: Office;
    offices: Office[];
    employee: null;
    employees: any[];
}

type LocationFields = {
    templatename?: string;
    contenttitle?: string;
    contentsubtitle?: string;
    contentabstract?: string;
    addresslocationline1?: string;
    addresslocationline2?: string;
    addresslocationline3?: string;
    addresslocationcity?: string;
    addresslocationcountryselector?: string;
    locationplanttype?: string;
    contactphonenumberbusiness?: string;
    locationaccreditations?: string,
    geopointdata?: string;
    name?: string;
    publicationpublicationdate?: string;
    contenttype?: string;
    relatedpage?: string;
    relatedpagetext?: string;
    locationproducts?: string;
    locationproductslabel?: string;
    locationspecialties?: string;
    locationspecialtieslabel?: string;
    locationproductslocal?: string;
    locationproductslocallabel?: string;
    locationspecialtieslocal?: string;
    locationspecialtieslocallabel?: string;
}

export interface Location {
    id: string;
    name: string;
    fields: LocationFields;
}