import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactComponent from "@/components/Contact";

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
      <main id="main" className="main">
        <ContactComponent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
