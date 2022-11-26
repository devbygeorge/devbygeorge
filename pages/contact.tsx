import Head from "next/head";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "@/styles/Contact.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

type Fields = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitDisabled, setSubmitDisabled] = useState(false);
  const { register, handleSubmit, reset, watch } = useForm<Fields>();
  const onSubmit: SubmitHandler<Fields> = async (data) => {
    setSubmitDisabled(true);

    const res = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });

    // Show correct responses
    if (res.status === 200) {
      console.log("success");
    } else {
      console.log("error");
    }

    reset();
    setSubmitDisabled(false);
  };

  return (
    <>
      <Head>
        <title>Contact - Giorgi Pasieshvili</title>
      </Head>

      <Header />

      <main id="main" className="main">
        <div className={s.contact}>
          <Sidebar data={sidebarData} />
          <Tabs label="contacts" />

          <div className={s.wrapper}>
            <div className={s.form_wrapper}>
              <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.field_wrapper}>
                  <label className={s.label} htmlFor="name">
                    _name:
                  </label>
                  <input
                    className={s.field}
                    type="text"
                    required
                    {...register("name")}
                  />
                </div>
                <div className={s.field_wrapper}>
                  <label className={s.label} htmlFor="email">
                    _email:
                  </label>
                  <input
                    className={s.field}
                    type="email"
                    required
                    {...register("email")}
                  />
                </div>
                <div className={s.field_wrapper}>
                  <label className={s.label} htmlFor="message">
                    _message:
                  </label>
                  <textarea
                    rows={5}
                    className={s.field}
                    required
                    {...register("message")}
                  ></textarea>
                </div>
                <button
                  className={`${s.submit} button ${
                    isSubmitDisabled ? s.disabled : ""
                  }`}
                  type="submit"
                >
                  submit-message
                </button>
              </form>
            </div>

            <div className={s.display}>
              <ul className={s.display_list}>
                <li className={s.display_item}>
                  <span className={s.magenta}>const </span>
                  <span className={s.purple}>button </span>
                  <span className={s.magenta}>= </span>
                  <span className={s.purple}>{"document.querySelector("}</span>
                  <span className={s.brown}>'#sendBtn'</span>
                  <span>{");"}</span>
                </li>
                <li className={s.display_item}></li>
                <li className={s.display_item}>
                  <span className={s.magenta}>const </span>
                  <span className={s.purple}>message </span>
                  <span className={s.magenta}>= </span>
                  <span>{"{"}</span>
                </li>
                <li className={s.display_item}>
                  <span style={{ marginLeft: "1rem" }} className={s.purple}>
                    name
                  </span>
                  <span>: </span>
                  <span className={s.brown}>"{watch("name")}"</span>
                  <span>,</span>
                </li>
                <li className={s.display_item}>
                  <span style={{ marginLeft: "1rem" }} className={s.purple}>
                    email
                  </span>
                  <span>: </span>
                  <span className={s.brown}>"{watch("email")}"</span>
                  <span>,</span>
                </li>
                <li className={s.display_item}>
                  <span style={{ marginLeft: "1rem" }} className={s.purple}>
                    message
                  </span>
                  <span>: </span>
                  <span className={s.brown}>"{watch("message")}"</span>
                  <span>,</span>
                </li>
                <li className={s.display_item}>
                  <span style={{ marginLeft: "1rem" }} className={s.purple}>
                    date
                  </span>
                  <span>: </span>
                  <span className={s.brown}>
                    "
                    {new Date().toLocaleDateString("en-US", {
                      weekday: "short",
                      year: undefined,
                      month: "short",
                      day: "numeric",
                    })}
                    "
                  </span>
                  <span>,</span>
                </li>
                <li className={s.display_item}>{"}"}</li>
                <li className={s.display_item}></li>
                <li className={s.display_item}>
                  <span className={s.purple}>button</span>
                  <span>.</span>
                  <span className={s.purple}>addEventListener</span>
                  <span>{"("}</span>
                  <span className={s.brown}>"click"</span>
                  <span>{", () "}</span>
                  <span className={s.magenta}>{"=> "}</span>
                  <span>{"{"}</span>
                </li>
                <li className={s.display_item}>
                  <span style={{ marginLeft: "1rem" }} className={s.purple}>
                    form
                  </span>
                  <span>.</span>
                  <span className={s.purple}>send</span>
                  <span>{"("}</span>
                  <span className={s.purple}>message</span>
                  <span>{");"}</span>
                </li>
                <li className={s.display_item}>{"})"}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
