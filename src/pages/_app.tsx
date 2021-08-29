import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

import { darkTheme, lightTheme } from "#root/config/theme";
import { pageview } from "#root/helpers/gtag";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  :root {
    --black: #242121;
    --bigBodySize: 25px;
    --h1Size: 44px;
    --smallBodySize: 18px;
    --sidebarSize: 15px;
    --linkColor: #0079ff;
  }

  @media screen and (max-width: 1100px) {
    :root {
      --bigBodySize: 27px;
      --h1Size: 40px;
      --smallBodySize: 19px;
      --sidebarSize: 15px;
    }
  }

  @media screen and (max-width: 600px) {
    :root {
      --bigBodySize: 19px;
      --h1Size: 28px;
      --smallBodySize: 18px;
      --sidebarSize: 13px;
    }
  }

`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { value } = useDarkMode(false, { storageKey: undefined, onChange: undefined });
  const [mounted, setMounted] = useState(false);

  const theme = value ? darkTheme : lightTheme;

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default MyApp;
