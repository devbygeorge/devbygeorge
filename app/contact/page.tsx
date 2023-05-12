import ContactArea from "@/components/ContactArea";
import Sidebar from "@/components/Sidebar";
import Tabs from "@/components/Tabs";
import s from "@/styles/Contact.module.scss";

export const metadata = {
  title: "_contact-me",
};

const sidebarData = [
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
  {
    title: "find-me-also-in",
    type: "links",
    items: [
      {
        icon: "ri-external-link-line",
        label: "YouTube channel",
        link: "https://www.youtube.com/@devbygeorge",
      },
      {
        icon: "ri-external-link-line",
        label: "Twitter profile",
        link: "https://twitter.com/devbygeorge",
      },
    ],
  },
];

export default function Contact() {
  return (
    <>
      <main className={s.contact}>
        <Sidebar data={sidebarData} />
        <Tabs label="contacts" />
        <ContactArea />
      </main>
    </>
  );
}
