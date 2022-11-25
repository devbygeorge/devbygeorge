import Head from "next/head";
import s from "@/styles/Contact.module.scss";

import Tabs from "@/components/Tabs";
import Sidebar from "@/components/Sidebar";

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
    type: "default",
    items: [
      {
        icon: "ri-external-link-line",
        label: "YouTube channel",
      },
      {
        icon: "ri-external-link-line",
        label: "Twitch profile",
      },
    ],
  },
];

export default function Contact() {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Contact - Giorgi Pasieshvili</title>
      </Head>

      <main id="main" className="main">
        <div className={s.contact}>
          <Sidebar data={sidebarData} />
          <Tabs label="contacts" />

          <div className={s.wrapper}>
            <div className={s.form_wrapper}>
              <form className={s.form} onSubmit={handleForm}>
                <div className={s.field_wrapper}>
                  <label className={s.label} htmlFor="name">
                    _name:
                  </label>
                  <input className={s.field} type="text" name="name" required />
                </div>
                <div className={s.field_wrapper}>
                  <label className={s.label} htmlFor="email">
                    _email:
                  </label>
                  <input
                    className={s.field}
                    type="email"
                    name="email"
                    required
                  />
                </div>
                <div className={s.field_wrapper}>
                  <label className={s.label} htmlFor="message">
                    _message:
                  </label>
                  <textarea
                    rows={5}
                    className={s.field}
                    name="message"
                    required
                  ></textarea>
                </div>
                <button className={`${s.submit} button`} type="submit">
                  submit-message
                </button>
              </form>
            </div>

            <div className={s.display}>
              <ul className={s.display_list}>
                <li className={s.display_item}>
                  const button = document.querySelector('#sendBtn');
                </li>
                <li className={s.display_item}></li>
                <li className={s.display_item}>const message = {"{"}</li>
                <li className={s.display_item}>name: "Jonathan Davis",</li>
                <li className={s.display_item}>email: "",</li>
                <li className={s.display_item}>message: "",</li>
                <li className={s.display_item}>date: "Thu 21 Apr"</li>
                <li className={s.display_item}>{"}"}</li>
                <li className={s.display_item}></li>
                <li className={s.display_item}>
                  button.addEventListener{"('click', () => {"}
                </li>
                <li className={s.display_item}>form.send(message);</li>
                <li className={s.display_item}>{"})"}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
