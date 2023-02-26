import React from "react";
import { Footer } from "../../components/Footer";
import { Meta } from "../../components/Meta";
import { Main } from "../../components/Main";
import { Hero } from "../../components/Hero";

export default function Home() {
  return (
    <>
      <Meta />
      <Main>
        <Hero />
        <h2>About</h2>
      </Main>
      <Footer />
    </>
  );
}
