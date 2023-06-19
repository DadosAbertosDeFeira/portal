import { regexes } from "./regexes";

export type ValidationsFunction = {
  [k: string]: (v: string) => string | boolean;
};

export type ValidationsIndexes = "email";

export const validations = new Map<ValidationsIndexes, ValidationsFunction>();

validations.set("email", {
  pattern: (v: string) =>
    regexes.get("email")!.test(v) || "Informe um email válido.",
});
