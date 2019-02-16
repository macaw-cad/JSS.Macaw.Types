import { StringItem, Link } from './FeatureTypes';
import { Facet } from '../search/facets';
import { Location } from './Business';
import { ProductSearchResult } from './ProductInfo';
import { DownloadSearchResult } from '../search/downloads';
import { Filter } from '../search/filter';
import { NewsSearchResult } from '../search/news';

export interface SearchController {
  searchControllerId: string;
  sortOrder: {
    [key: string]: string;
  };
  endPoint: string;
  size?: number;
}

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

export interface SearchResultsControl {
  searchControllerId: string;
  title: StringItem;
  type: StringItem;
  link: Link | null;
  linkText: StringItem;
}

export interface SearchFilterControl {
  searchControllerId: string,
  title: string,
  filterName: string,
  label: string,
  inputAction: Link,
  placeholderText: string,
  indexField: any, // don't use this one
  multiSelect: boolean,
  displayCount: number,
  showMoreText: string,
  terms: any // don't use this one
}

export type SearchItems = ProductSearchResult[] | Location[] | GlobalSearchResultType[] | DownloadSearchResult[] | NewsSearchResult[];

export interface SearchType {
  filters: Filter[]
  facets: Facet[]
  results: {
    items: SearchItems,
    statistics: {
      totalCount: number
    }
  }
}

export interface ActiveFacets {
  readonly [key: string]: string[]
};

export interface ActiveFilters {
  readonly [key: string]: string
}

export interface SearchState {
  readonly [key: string]: {
    readonly activeFacets: ActiveFacets;
    readonly activeFilters?: ActiveFilters;
    readonly loading: boolean;
    readonly searchItems?: SearchItems
    readonly from?: number;
    readonly totalCount?: number;
  }
}