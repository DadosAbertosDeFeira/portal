import type { BoxProps } from "atoms/Box";
import type { SubmitHandler } from "react-hook-form";

export type SearchDocumentForm = {
  category: string;
  search: string;
};

export type SearchDocumentFormHandler = SubmitHandler<SearchDocumentForm>;

export type SearchDocumentsFormProps = Omit<BoxProps, "onSubmit"> & {
  onSubmit?: SearchDocumentFormHandler;
  title: string;
  suggestions: string[];
  categories: string[];
};
