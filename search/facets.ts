export interface FacetOption {
    name: string;
    label?: string; // used in the speial case where filter is used as an facet
    count?: number;
    selected?: boolean;
}

export interface Facet {
    title: string;
    name: string;
    label: string;
    multiSelect?: boolean;
    displayCount?: number;
    showMoreText?: string;
    values: FacetOption[];
}
