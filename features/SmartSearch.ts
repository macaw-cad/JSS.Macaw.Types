import { StringItem, Link } from './FeatureTypes';

export default interface SmartSearch {
    title: StringItem;
    prefix: StringItem;
    suggestList: {
        items: StringItem[];
    };
    formAction: Link;
}