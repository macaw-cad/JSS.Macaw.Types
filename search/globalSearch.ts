type GlobalSearchResultFields = {
    teasertitle: string,
    templatename: string,
    itemurl: string,
    teaserabstract: string
}

export interface GlobalSearchResultType {
    id: string;
    name: string;
    fields: GlobalSearchResultFields;
}