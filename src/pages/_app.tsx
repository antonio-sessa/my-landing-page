import React, { useEffect } from "react";
import { GlobalStyle } from "../components/GlobalStyle";
import TagManager from "react-gtm-module"

const tagManagerArgs = {
  id: "GTM-5RR53JT",
}

export default function App({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
