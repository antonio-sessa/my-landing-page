import Script from "next/script";
import React, { useEffect } from "react";
import { GlobalStyle } from "../components/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />

      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="b98e1d1b-1839-4473-b290-41f8d4c11788"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>

      <Script
        data-cookieconsent="ignore"
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('consent', 'default', {ad_storage:'denied', analytics_storage:'denied'});
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);

          gtag('js', new Date());
          gtag('config', 'GTM-5RR53JT');
        `}
      </Script>

      <Script
        data-cookieconsent="ignore"
        src="https://www.googletagmanager.com/gtag/js?id=GTM-5RR53JT"
        strategy="afterInteractive"
      />
    </>
  );
}
