import Image from "next/image";

import ActivityBar from "@/components/ActivityBar";
import EditorWindow from "@/components/EditorWindow";
import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";
import s from "@/styles/About.module.scss";
import getPageInfo from "@/utils/getPageInfo";

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

export const metadata = {
  title: "_about-me",
};

export default async function About() {
  const { about } = await getPageInfo();

  return (
    <>
      <main className={s.about}>
        {/* Activity bar on left */}
        <ActivityBar />
        {/* Sidebar next to activity bar */}
        <Sidebar data={sidebarData} />
        {/* Tabs next to sidebar and top of editor and snippers */}
        <Tabs label="personal-info" />
        {/* Editor window */}
        <EditorWindow about={about} />
        {/* Snippets window */}
        <div className={s.snippetsWindow}>
          <p className={s.snippetsComment}>{"// Code snippet showcase:"}</p>

          <div className={s.snippetItem}>
            <div className={s.snippetUserDetails}>
              <span>img</span>
              <span>Snip 1</span>
              <i className="ri-chat-smile-3-fill"></i>
              <span>details</span>
              <i className="ri-star-fill"></i>
              <span>stars</span>
            </div>
            <div className={s.snippetImage}>
              <Image
                src="/images/code-snippet-n.svg"
                alt="code snippet"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
          <div className={s.snippetItem}>
            <div className={s.snippetUserDetails}>
              <span>img</span>
              <span>Snip 2</span>
              <i className="ri-chat-smile-3-fill"></i>
              <span>details</span>
              <i className="ri-star-line"></i>
              <span>stars</span>
            </div>
            <div className={s.snippetImage} data-height="short">
              <Image
                src="/images/code-snippet-2.svg"
                alt="code snippet"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
