import Navigation from './features/Navigation';
import ProductInfo from './features/ProductInfo';
import RelatedItems from './features/RelatedItems';
import List from './features/List';
import Dictionary from './features/Dictionary';
import SmartSearch from './features/SmartSearch';
import RichContent from './features/RichContent';
import IFrame from './features/IFrame';
import { Content, Teaser, Publication, OpenGraph, Seo } from './features/FeatureTypes';
import Business from './features/Business';
import Contact from './features/Contact';
import Person from './features/Person';
import Address from './features/Address';
import Cookies from './features/Cookies';
import Product from './features/Product';
import { SearchController, SearchResultsControl, SearchType, SearchFilterControl } from './features/SearchFeatures';
import { TwitterController } from './features/TwitterFeatures'

export default interface Features {
    dictionary?: Dictionary;
    navigation?: Navigation;
    productInfo?: ProductInfo;
    list?: List;
    relatedItems?: RelatedItems;
    content?: Content;
    teaser?: Teaser;
    smartSearch?: SmartSearch;
    publication?: Publication;
    richContent?: RichContent;
    iFrame?: IFrame;
    business?: Business;
    contact?: Contact;
    person?: Person;
    address?: Address;
    searchController?: SearchController;
    searchResultsControl?: SearchResultsControl;
    search?: SearchType;
    searchFilterControl?: SearchFilterControl;
    cookies?: Cookies;
    product?: Product;
    twitterController?: TwitterController;
    openGraph?: OpenGraph;
    seo?: Seo;
}