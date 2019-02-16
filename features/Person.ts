import { StringItem } from './FeatureTypes';

export default interface Person {
    firstName?: StringItem;
    middleName?: StringItem;
    lastName?: StringItem;
    callName?: StringItem;
    fullName?: StringItem;
}