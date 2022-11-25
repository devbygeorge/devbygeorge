import Head from "next/head";
import s from "@/styles/About.module.scss";

import ActivityBar from "@/components/ActivityBar";
import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";

const sidebarData = [
  {
    title: "personal-info",
    type: "fileSystem",
    items: [
      {
        icon: "ri-folder-3-fill",
        label: "bio",
        isDir: true,
        color: "#e99287",
        arrowIcon: "ri-arrow-right-s-line",
        isActive: true,
      },
      {
        icon: "ri-folder-3-fill",
        label: "interests",
        isDir: true,
        color: "#43d9ad",
        arrowIcon: "ri-arrow-right-s-line",
      },
      {
        icon: "ri-folder-3-fill",
        label: "education",
        isDir: true,
        color: "#4d5bce",
        arrowIcon: "ri-arrow-down-s-line",
      },
      {
        icon: "ri-markdown-fill",
        label: "high-school",
        isDir: false,
      },
      {
        icon: "ri-markdown-fill",
        label: "college",
        isDir: false,
      },
    ],
  },
  {
    title: "contacts",
    type: "default",
    items: [
      {
        icon: "ri-mail-fill",
        label: "giopasieshvili2@gmail.com",
      },
      {
        icon: "ri-phone-fill",
        label: "+3598246359",
      },
    ],
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About - Giorgi Pasieshvili</title>
      </Head>

      <main id="main" className="main">
        <div className={s.about}>
          <ActivityBar />
          <Sidebar data={sidebarData} />
          <Tabs label="personal-info" />

          <div className={s.wrapper}>
            <div className={s.editor}>
              <ul className={s.list}>
                <li className={s.item}>/**</li>
                <li className={s.item}>* About me</li>
                <li className={s.item}>
                  * I have 5 years of еxperience in web
                </li>
                <li className={s.item}>
                  * development lorem ipsum dolor sit amet,
                </li>
                <li className={s.item}>
                  * consectetur adipiscing elit, sed do eiusmod
                </li>
                <li className={s.item}>
                  * tempor incididunt ut labore et dolore
                </li>
                <li className={s.item}>
                  * magna aliqua. Ut enim ad minim veniam,
                </li>
                <li className={s.item}>
                  * quis nostrud exercitation ullamco laboris
                </li>
                <li className={s.item}>
                  * nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className={s.item}>
                  * Duis aute irure dolor in reprehenderit in
                </li>
                <li className={s.item}>*</li>
                <li className={s.item}>
                  * Duis aute irure dolor in reprehenderit in
                </li>
                <li className={s.item}>
                  * voluptate velit esse cillum dolore eu fugiat
                </li>
                <li className={s.item}>
                  * nulla pariatur. Excepteur sint occaecat
                </li>
                <li className={s.item}>
                  * officia deserunt mollit anim id est laborum.
                </li>
                <li className={s.item}>*/</li>
              </ul>
              <p className={s.paragraph}>
                I have 5 years of experience in web development lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat officia deserunt mollit anim id est
                laborum.
              </p>
            </div>

            <div className={s.snippets}>
              <div className={s.snippets_container}>
                <p className={s.single_comment}>// Code snippet showcase:</p>
                <div className={s.snippet}>
                  <div className={s.user}>
                    <span>img</span>
                    <span>Snippet 1</span>
                    <i className="ri-chat-smile-3-fill"></i>
                    <span>details</span>
                    <i className="ri-star-fill"></i>
                    <span>stars</span>
                  </div>
                  <img
                    className={s.snippet_img}
                    src="/images/code-snippet-n.svg"
                    alt="code snippet"
                  />
                </div>
                <div className={s.snippet}>
                  <div className={s.user}>
                    <span>img</span>
                    <span>Snippet 2</span>
                    <i className="ri-chat-smile-3-fill"></i>
                    <span>details</span>
                    <i className="ri-star-line"></i>
                    <span>stars</span>
                  </div>
                  <img
                    className={s.snippet_img}
                    src="/images/code-snippet-2.svg"
                    alt="code snippet"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
