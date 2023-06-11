import Head from "next/head";
import type { ReactNode } from "react";
import React from "react";

export type SeoLayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  suffix?: boolean;
  indexPage?: boolean;
  image: string;
};

// eslint-disable-next-line import/no-default-export

export function SeoLayout({
  title = "",
  description,
  image,
  children,
  suffix = false,
  indexPage = true,
}: SeoLayoutProps) {
  const titleWithSuffix = `${title} | Dados abertos de Feira`;
  const computedTitle = suffix ? titleWithSuffix : title;

  const hostedImage = `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`;
  const computedImage = image ? hostedImage : undefined;

  return (
    <>
      <Head>
        <title>{computedTitle}</title>
        {description && <meta name="description" content={description} />}
        {!indexPage && <meta name="robots" content="noindex,nofollow" />}
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="google" content="notranslate" />

        <meta property="og:title" content={computedTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={computedTitle} />
        <meta property="og:image" content={computedImage} />
        <meta property="og:image:secure_url" content={computedImage} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content={computedTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DadosDeFeira" />
        <meta name="twitter:creator" content="@DadosDeFeira" />
        <meta name="twitter:image" content={computedImage} />
        <meta name="twitter:image:src" content={computedImage} />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="620" />
      </Head>
      {children}
    </>
  );
}
