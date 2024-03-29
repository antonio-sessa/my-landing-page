import { createGlobalStyle } from "styled-components";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
:root {
    --max-width: 1100px;
    --border-radius: 12px;
  
    --foreground-rgb: 0, 0, 0;
    --background-rgb: 255, 255, 255;
  }
  
@media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-rgb: 0, 0, 0;
    }
}
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  body {
    color: rgb(var(--foreground-rgb));
    background: rgb(var(--background-start-rgb));
    ${roboto.style}
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
}`;
