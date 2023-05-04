import Head from "next/head";
import { useState, useEffect } from "react";
import s from "@/styles/Projects.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";

import { GetStaticProps } from "next";
import { Project } from "typings";
import { fetchProjects } from "utils/fetchProjects";
import { urlFor } from "sanity";

type Props = {
  projects: Project[];
};

type Item = {
  key?: string;
  name: string;
  slug: string;
};

export default function Projects({ projects }: Props) {
  const [checkedTech, setCheckedTech] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setFilteredProjects(() => {
      if (!checkedTech.length) {
        return projects;
      }

      return projects.filter((project) => {
        const checkedTechInProject = project.tech.filter(
          (item: Item) => checkedTech.indexOf(item.slug) > -1
        );

        if (checkedTechInProject.length) {
          return true;
        } else {
          return false;
        }
      });
    });
  }, [checkedTech]);

  // Merge same tech from projects
  const tech: any = [];
  projects.forEach((project) => {
    project.tech.forEach((item: Item) => {
      if (!tech.find((arrayItem: Item) => arrayItem.slug === item.slug)) {
        tech.push({ name: item.name, slug: item.slug });
      }
    });
  });

  // Prepare sidebar data
  const sidebarData = [
    {
      title: "projects",
      type: "checkbox",
      items: tech,
    },
  ];

  return (
    <>
      <Head>
        <title>Projects - Giorgi Pasieshvili</title>
      </Head>

      <Header />

      <main id="main" className="main">
        <div className={s.projects}>
          <Sidebar data={sidebarData} setCheckedTech={setCheckedTech} />
          <Tabs label="React; Vue" />
          <div className={s.projects_wrapper}>
            <div className={s.grid}>
              {filteredProjects.map((project, i) => (
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
                    <div className={s.card_text}>
                      <p>{project.description}</p>
                      <ul className={s.card_tech}>
                        {project.tech.map((item: Item) => (
                          <li key={item.slug} className={s.card_tech_item}>
                            {item.name}
                          </li>
                        ))}
                      </ul>
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
