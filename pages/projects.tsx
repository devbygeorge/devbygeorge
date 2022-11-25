import Head from "next/head";
import s from "@/styles/Projects.module.scss";

import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";

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

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Giorgi Pasieshvili</title>
      </Head>

      <main id="main" className="main">
        <div className={s.projects}>
          <Sidebar data={sidebarData} />
          <Tabs label="React; Vue" />

          <div className={s.grid}>
            {data.map((project) => (
              <div className={s.card_wrapper}>
                <div className={s.card_title}>
                  <span>{project.title}</span>
                  <span>// {project.type}</span>
                </div>
                <div className={s.card}>
                  <img src={project.img} alt="card img" />
                  <div className={s.card_icon}>
                    <i className={`ri-${project.tech}-fill`}></i>
                  </div>
                  <div className={s.card_text}>
                    <p>Duis aute irure dolor in velit esse cillum dolore.</p>
                    <button className="button">view-project</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
