import Head from "next/head";
import s from "@/styles/Projects.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";

import { GetStaticProps } from "next";
import { Project } from "typings";
import { fetchProjects } from "utils/fetchProjects";
import { urlFor } from "sanity";

const data = [
  {
    title: "Project 1",
    type: "_ui-animations",
    img: "/images/card-1.png",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    tech: "reactjs",
  },
  {
    title: "Project 2",
    type: "_tetris-game",
    img: "/images/card-2.png",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    tech: "reactjs",
  },
  {
    title: "Project 3",
    type: "_etherium",
    img: "/images/card-3.png",
    desc: "Duis aute irure dolor in velit esse cillum dolore.",
    tech: "reactjs",
  },
];

const sidebarData = [
  {
    title: "projects",
    type: "checkbox",
    items: [
      {
        icon: "ri-reactjs-fill",
        label: "React",
      },
      {
        icon: "ri-html5-fill",
        label: "HTML",
      },
      {
        icon: "ri-css3-fill",
        label: "CSS",
      },
      {
        icon: "ri-vuejs-fill",
        label: "Vue",
      },
      {
        icon: "ri-angularjs-fill",
        label: "Angular",
      },
      {
        icon: "ri-gatsby-fill",
        label: "Gatsby",
      },
      {
        icon: "ri-flutter-fill",
        label: "Flutter",
      },
    ],
  },
];

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  console.log(projects);

  return (
    <>
      <Head>
        <title>Projects - Giorgi Pasieshvili</title>
      </Head>

      <Header />

      <main id="main" className="main">
        <div className={s.projects}>
          <Sidebar data={sidebarData} />
          <Tabs label="React; Vue" />

          <div className={s.grid}>
            {projects.map((project, i) => (
              <div key={i} className={s.card_wrapper}>
                <div className={s.card_title}>
                  <span>{project.title}</span>
                  <span>// {project.category}</span>
                </div>
                <div className={s.card}>
                  <img
                    className={s.card_image}
                    src={urlFor(project.image).url()}
                    alt={project.title}
                  />
                  <div className={s.card_icon}>
                    <i className={`ri-${project.tech[0].slug}-fill`}></i>
                  </div>
                  <div className={s.card_text}>
                    <p>{project.description}</p>
                    <div className={s.buttons}>
                      <a
                        target="_blank"
                        href={project.github}
                        className="button"
                      >
                        view-project
                      </a>
                      <a
                        target="_blank"
                        href={project.demo}
                        className={`button ${s.demo}`}
                      >
                        view-demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      projects,
    },
    // Next.js will attempt to re-generate the page:
    // - When a requst comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
