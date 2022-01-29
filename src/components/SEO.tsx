import { NextSeo, NextSeoProps } from "next-seo";
import Head from "next/head";

type SEOProps = NextSeoProps & {
  title: string;
  description: string;
  image?: string;
  locale?: string;
};

const SEO = ({
  title,
  description,
  locale = "en",
  image = "/android-chrome-512x512.png",
}: SEOProps) => {
  const siteURL = "https://jmacazana.com";

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          description: description,
          locale: locale,
          title: title,
          profile: {
            firstName: "Jhonatan",
            lastName: "Macazana",
            gender: "Male",
            username: "jmacazana",
          },
          site_name: "Jhonatan Macazana | Portfolio",
          type: "website",
          url: siteURL,
          images: [
            {
              url: `${siteURL}${image}`,
              alt: "Jhonatan Macazana Page",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          handle: "@jmacazana2",
          site: "@jmacazana2",
        }}
      />

      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>

        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"></link>

        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#ffffff"></meta>

        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default SEO;
