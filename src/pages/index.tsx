import Link from "next/link";
import React from "react";
import { Meta } from "../components/Meta";
import { Links } from "../components/Links";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { LineBreaker } from "../components/LineBreaker";

export default function Home() {
  return (
    <>
      <Main>
        <Hero />
        <LineBreaker />
        <Links />
      </Main>
      <Footer />
    </>
  );
}
