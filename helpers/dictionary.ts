import { DictionaryEntry } from '../features/FeatureTypes';

export class DictionaryHelpers {
    public static getDictionaryPhrase(dictionaryItems: DictionaryEntry[] | undefined, dictionaryItemKey: string, fallBackPhrase: string, moduleName: string = '') {
        let dictionaryItem: undefined | DictionaryEntry;
        
        if (dictionaryItems) {
            dictionaryItem = dictionaryItems.find(dict => dict.key === dictionaryItemKey);
        }

        if (dictionaryItem) {
            return dictionaryItem.phrase;
        } else {
            return `[[${dictionaryItemKey}:${moduleName}]]`;
        }
    }
}