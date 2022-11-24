import Head from "next/head";
import AboutComponent from "@/components/About";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Giorgi Pasieshvili</title>
      </Head>

      <main id="main" className="main">
        <AboutComponent />
      </main>
    </>
  );
}
