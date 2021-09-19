import { NextSeo, NextSeoProps } from "next-seo";

import Metadata from "./Metadata";

interface SEOProps extends NextSeoProps {
  title: string;
  description: string;
  image?: string;
  locale?: string;
}

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

      <Metadata />
    </>
  );
};

export default SEO;
