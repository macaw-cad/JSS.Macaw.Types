import { LocationAccreditationItem } from './LocationAccreditation';

export interface Location {
    locationAccreditations: LocationAccreditationItem[],
    accreditationsTitle: string
}