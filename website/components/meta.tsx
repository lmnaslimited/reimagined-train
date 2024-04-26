import { TheadMetaData } from "@/data/types";
import Head from "next/head";
export default function Meta({ imetaData }: { imetaData: TheadMetaData }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(imetaData.schemaData),
        }}
      />
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/favicon/android-icon-48x48.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/mstile-150x150.png"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{imetaData.title}</title>
      <meta name="description" content={imetaData.description} />

      <link rel="canonical" href={imetaData.pageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@lmnaslimited" />
      <meta name="twitter:title" content={imetaData.title} />
      <meta name="twitter:description" content={imetaData.description} />
      <meta name="twitter:image" content="https://lmnas.com/lmnaslogo.png" />
      <meta property="og:title" content={imetaData.title} />
      <meta property="og:description" content={imetaData.description} />
      <meta property="og:image" content="https://lmnas.com/lmnaslogo.png" />
      <meta property="og:url" content={imetaData.pageUrl} />
      <meta property="og:site_name" content="LMNAs" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
