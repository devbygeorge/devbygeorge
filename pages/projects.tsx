import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsComponent from "@/components/Projects";

export default function Projects() {
  return (
    <div className="app">
      <Head>
        <title>Projects - Giorgi Pasieshvili</title>
        <meta name="description" content="Portfolio Giorgi Pasieshvili" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main" className="main">
        <ProjectsComponent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
