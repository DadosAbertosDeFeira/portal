export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
/**
 * Função para desparo do evento do pageview
 *
 * @param url path da URL da página atual.
 *
 * @example
 * ```
 * import { pageview } from "../lib/gtag";
 *
 * export default function Page () {
 *
 *  useEffect(() => {
 *    pageview(window.location.pathname); // ATENÇÃO: Window pode não existir se tiver sendo rodado do lado do servidor.
 *  }, [])
 *  ...
 * }
 * ```
 */
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
/**
 * Função para desparo de eventos do google analytics
 *
 * @param action O valor que aparecerá como a ação do evento nos relatórios de eventos do Google Analytics.
 * @param label O rótulo do evento.
 * @param rest quaisquer outros parametros a serem passados para o Google Analytics
 *
 * @example
 * ```
 * import { event } from "../lib/gtag";
 *
 * export default function Page () {
 *
 *  const handleClickAboutUsButton = () => {
 *    event('Click', 'AboutUs', {element: 'Button'})
 *  };
 *
 *  return (
 *    ...
 *    <button type="button" onClick={handleClickAboutUsButton} />
 *    ...
 *  )
 * }
 * ```
 */
export const event = (action, label, ...rest) => {
  window.gtag('event', action, {
    event_name: action,
    event_label: label,
    ...rest,
  });
};
