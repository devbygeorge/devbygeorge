"use client";

import { useMemo, useState } from "react";

import Image from "next/image";

import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";
import { urlFor } from "sanity";
import { Category, Project } from "typings";

import s from "./ProjectsArea.module.scss";

type Props = {
  projects: Project[];
  categories: Category[];
};

export default function ProjectsArea({ projects, categories }: Props) {
  const [chosenCategories, setChosenCategories] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    if (!chosenCategories.length) {
      return projects;
    }

    return projects.filter((project) => {
      const hasChosenCategory = project.categories.filter((category) =>
        chosenCategories.includes(category["slug"])
      );
      return hasChosenCategory.length;
    });
  }, [chosenCategories, projects]);

  const sidebarData = [
    {
      title: "projects",
      type: "checkbox",
      items: categories,
    },
  ];

  return (
    <main className={s.projectsArea}>
      <Sidebar data={sidebarData} setChosenCategories={setChosenCategories} />
      <Tabs label="React; Vue" />
      <div className={s.projects}>
        <div className={s.cardsGrid}>
          {filteredProjects.map((project) => (
            <div key={project["_id"]} className={s.cardWrapper}>
              <div className={s.cardTitle}>
                <span>{project["title"]}</span>
                <span>{"// tempo"}</span>
              </div>
              <div className={s.cardItem}>
                <div className={s.cardImage}>
                  <Image
                    src={urlFor(project["image"]).url()}
                    alt={project["title"]}
                    quality={100}
                    priority
                    fill
                    sizes="(max-width: 768px) 100vw"
                  />
                </div>
                <div className={s.cardContent}>
                  <p>{project["description"]}</p>
                  <ul className={s.cardTechs}>
                    {project["categories"].map((category) => (
                      <li key={category["_id"]} className={s.cardTech}>
                        <span>{category["name"]}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={s.cardButtons}>
                    <a
                      target="_blank"
                      href={project["github"]}
                      className="button button--secondary"
                    >
                      view-project
                    </a>
                    <a
                      target="_blank"
                      href={project["demo"]}
                      className="button button--primary"
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
  );
}
