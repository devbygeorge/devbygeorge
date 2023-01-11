import Head from "next/head";
import s from "@/styles/About.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ActivityBar from "@/components/ActivityBar";
import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";

import { GetStaticProps } from "next";
import { PageInfo } from "typings";
import { fetchPageInfo } from "utils/fetchPageInfo";

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

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  const aboutSplitted = pageInfo.about.match(/.{0,47}/g);

  return (
    <>
      <Head>
        <title>About - Giorgi Pasieshvili</title>
      </Head>

      <Header />

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
                {aboutSplitted?.map((item, i) => (
                  <li className={s.item} key={i}>
                    * {item}
                  </li>
                ))}
                <li className={s.item}>*/</li>
              </ul>
              <p className={s.paragraph}>{pageInfo.about}</p>
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

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
    },
    // Next.js will attempt to re-generate the page:
    // - When a requst comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
