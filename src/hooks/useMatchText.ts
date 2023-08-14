import { useEffect, useState } from "react";

export type UseMatchTextParams<T> = {
  value: string;
  items: T[];
  itemToString?: (item: T) => string;
};

export function useMatchText<T>({
  value,
  items,
  itemToString = (v) => String(v),
}: UseMatchTextParams<T>) {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const filteredItems = items.filter((item) => {
      if (typeof item !== "string") {
        const itemString = itemToString(item);
        return itemString.toUpperCase().includes(value.toUpperCase());
      }

      return item.toUpperCase().includes(value.toUpperCase());
    });

    setFilteredItems(filteredItems);
  }, [items, value, setFilteredItems, itemToString]);

  return filteredItems;
}
