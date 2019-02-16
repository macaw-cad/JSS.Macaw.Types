type NewsSearchResultFields = {
    teasertitle?: string;
    templatename?: string;
    publicationpublicationdate?: string;
    publicationpublicationisodate?: string;
    itemurl?: string;
    name?: string;
    contenttype?: string;
    contenttypeurl?: string;
    teaserimage?: string;
}

export interface NewsSearchResult {
    id: string;
    name: string;
    fields: NewsSearchResultFields;
}