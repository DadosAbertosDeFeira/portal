import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    setMatch(matchMedia.matches);

    const handleMatchMedia = (event: MediaQueryListEvent) => {
      setMatch(event.matches);
    };

    matchMedia.addEventListener("change", handleMatchMedia);

    return () => matchMedia.removeEventListener("change", handleMatchMedia);
  }, [query]);

  return matches;
}
