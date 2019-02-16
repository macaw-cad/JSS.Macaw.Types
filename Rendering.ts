import Datasource from './Datasource';
import { LookupItem } from './features/FeatureTypes';
import { DictionaryEntry } from './features/FeatureTypes';

export default interface Rendering {
    id: string;
    name: string;
    editing: boolean;
    variant?: string;
    datasource: Datasource;
    module: string;
    parameters?: {
        className?: string;
        isHomePage?: boolean;
    };
    dictionary?: DictionaryEntry[];
    relatedResources?: LookupItem[];
}