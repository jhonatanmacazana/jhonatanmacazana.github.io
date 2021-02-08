import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = "/images/wide-logo.png",
}) => {
  const siteURL = "https://jmacazana.tk";

  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:creator" content="@jmacazana"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="og:type" content="website"></meta>

      <meta property="og:title" content={title}></meta>
      <meta name="twitter:title" content={title}></meta>

      <meta name="description" content={description}></meta>
      <meta name="twitter:description" content={description}></meta>

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      ></link>

      <link rel="manifest" href="/site.webmanifest"></link>
      <link
        rel="mask-icon"
        href="/safari-pinned-tab.svg"
        color="#5bbad5"
      ></link>

      <meta name="msapplication-TileColor" content="#2b5797"></meta>
      <meta name="theme-color" content="#ffffff"></meta>

      <meta property="og:image" content={`${siteURL}${image}`}></meta>
      <meta name="twitter:image" content={`${siteURL}${image}`}></meta>
      <link href="/common.css" rel="stylesheet" />

      <link rel="icon" type="image/png" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
