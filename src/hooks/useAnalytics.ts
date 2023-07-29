import { useRouter } from "next/router";
import { useEffect } from "react";

import * as gtag from "../lib/gtag";

export function useAnalytics() {
  const { events } = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => gtag.pageview(url);
    events.on("routeChangeComplete", handleRouteChange);
    return () => events.off("routeChangeComplete", handleRouteChange);
  }, [events]);
}
