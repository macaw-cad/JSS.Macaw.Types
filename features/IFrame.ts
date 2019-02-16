import { StringItem, NumberItem } from './FeatureTypes';

// tslint:disable-next-line 
export default interface IFrame {
    src: StringItem;
    height?: NumberItem;
    width?: NumberItem;
}