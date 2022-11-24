import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome - Giorgi Pasieshvili</title>
      </Head>

      <main id="main" className="main">
        <Hero />
      </main>
    </>
  );
}
