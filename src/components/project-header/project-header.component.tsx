import Head from "next/head";

interface ProjectHeaderProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
}

export const ProjectHeader = ({
  title,
  description,
  keywords,
  url,
}: ProjectHeaderProps) => {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="A1TKe7Phyl32i1AUX65XFETd0u8blEM119nHMIx6yY0"
      />
      <title>{title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4ce3c2" />
      <meta name="msapplication-TileColor" content="#4ce3c2" />
      <meta name="theme-color" content="#121214" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Diogo Izele" />
      <meta name="copyright" content="© 2022 Diogo Izele" />
      <meta name="robots" content="all" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://i.imgur.com/igc7k1N.png" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content="Diogo Izele" />
      <meta name="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://i.imgur.com/igc7k1N.png"
      />
      <link rel="canonical" href={url} />
    </Head>
  );
};
