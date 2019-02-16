type DownloadSearchResultFields = {
    contenttitle?: string,
    publicationpublicationdate?: string,
    newsrelatedpresentation?: string,
    newsrelatedpressrelease?: string,
    newsrelatedreport?: string
    templatename?: string
    name?: string
}

export interface DownloadSearchResult {
    id: string;
    name: string;
    fields: DownloadSearchResultFields;
}