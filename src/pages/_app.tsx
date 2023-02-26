import Script from "next/script";
import React, { useEffect } from "react";
import { GlobalStyle } from "../components/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-5RR53JT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-5RR53JT');
        `}
      </Script>
      
    </>
  );
}
