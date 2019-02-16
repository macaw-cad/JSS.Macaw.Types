export interface Filter {
    title: string;
    name: string;
    label: string;
    multiSelect: boolean;
    displayCount: number;
    showMoreText: string;
    terms: FilterTerm[] | {};
    placeholderText: string;
}

export interface FilterTerm {
    key: string;
    value: string;
    selected?: boolean;
}