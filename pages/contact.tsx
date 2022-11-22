import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="app">
      <Head>
        <title>Contact - Giorgi Pasieshvili</title>
        <meta name="description" content="Portfolio Giorgi Pasieshvili" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <h1>Contact Page</h1>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
