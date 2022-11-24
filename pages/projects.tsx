import Head from "next/head";
import ProjectsComponent from "@/components/Projects";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Giorgi Pasieshvili</title>
      </Head>

      <main id="main" className="main">
        <ProjectsComponent />
      </main>
    </>
  );
}
