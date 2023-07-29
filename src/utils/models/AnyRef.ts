import type { ForwardedRef, MutableRefObject, Ref } from "react";

export type AnyRef<T> = Ref<T> | MutableRefObject<T> | ForwardedRef<T>;
