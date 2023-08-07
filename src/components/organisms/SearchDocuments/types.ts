import type { FilterSearchProps } from "organisms/FilterSearch";
import type { ComponentPropsWithoutRef, ReactElement } from "react";

export type SearchDocumentsProps = ComponentPropsWithoutRef<"section"> & {
  searchForm: ReactElement<FilterSearchProps>;
  searchSuggestions?: string[];
};
