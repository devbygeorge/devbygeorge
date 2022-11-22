import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Welcome - Giorgi Pasieshvili</title>
        <meta name="description" content="Portfolio Giorgi Pasieshvili" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Hero Content */}
      <main id="main" className="main">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
