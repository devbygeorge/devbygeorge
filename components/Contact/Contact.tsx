import React from "react";
import s from "./Contact.module.scss";

type Props = {};

export default function Contact({}: Props) {
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={s.contact}>
      {/* Sidebar */}
      <div className={s.sidebar}>
        <div className={s.sidebarWindow}>
          <h2 className={s.sidebarHeadline}>
            <i className="ri-arrow-drop-down-fill"></i>
            contacts
          </h2>
          <ul className={s.sidebarList}>
            <li className={s.sidebarItem}>
              <i className="ri-mail-fill"></i>
              giopasieshvili2@gmail.com
            </li>
            <li className={s.sidebarItem}>
              <i className="ri-phone-fill"></i>
              +3598246359
            </li>
          </ul>
        </div>
        <div className={s.sidebarWindow}>
          <h2 className={s.sidebarHeadline}>
            <i className="ri-arrow-drop-down-fill"></i>
            find-me-also-in
          </h2>
          <ul className={s.sidebarList}>
            <li className={s.sidebarItem}>
              <i className="ri-external-link-line"></i>
              YouTube channel
            </li>
            <li className={s.sidebarItem}>
              <i className="ri-external-link-line"></i>
              Twitch profile
            </li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className={s.tabs}>
        <div className={s.tab}>
          <div className={s.tabItem}>
            <span>contacts</span>
            <i className="ri-close-line"></i>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className={s.formArea}>
        <form className={s.form} onSubmit={handleForm}>
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor="name">
              _name:
            </label>
            <input className={s.field} type="text" name="name" required />
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label} htmlFor="email">
              _email:
            </label>
            <input className={s.field} type="email" name="email" required />
          </div>
          <div className={s.inputWrapper}>
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

      {/* Code Display */}
      <div className={s.codeDisplay}>
        <ul className={s.codeList}>
          <li className={s.codeListItem}>
            const button = document.querySelector('#sendBtn');
          </li>
          <li className={s.codeListItem}></li>
          <li className={s.codeListItem}>const message = {"{"}</li>
          <li className={s.codeListItem}>name: "Jonathan Davis",</li>
          <li className={s.codeListItem}>email: "",</li>
          <li className={s.codeListItem}>message: "",</li>
          <li className={s.codeListItem}>date: "Thu 21 Apr"</li>
          <li className={s.codeListItem}>{"}"}</li>
          <li className={s.codeListItem}></li>
          <li className={s.codeListItem}>
            button.addEventListener{"('click', () => {"}
          </li>
          <li className={s.codeListItem}>form.send(message);</li>
          <li className={s.codeListItem}>{"})"}</li>
        </ul>
      </div>
    </div>
  );
}
