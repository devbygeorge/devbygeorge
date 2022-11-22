import s from "./About.module.scss";
// import "remixicon/fonts/remixicon.css";

type Props = {};

export default function About({}: Props) {
  return (
    <div className={s.about}>
      <div className={s.activityBar}>activity bar</div>
      <div className={s.sidebar}>
        <div className={s.sidebarWindow}>
          <h2>personal-info</h2>
          <ul>
            <li>bio</li>
            <li>interests</li>
            <li>education</li>
            <li>high-school</li>
            <li>college</li>
          </ul>
        </div>
        <div className={s.sidebarWindow}>
          <h2>contacts</h2>
          <ul>
            <li>giopasieshvili2@gmail.com</li>
            <li>+3598246359</li>
          </ul>
        </div>
      </div>
      <div className={s.editor}>
        <div className={s.tabs}>
          <div className={s.tabItem}>personal-info</div>
        </div>
        <ul className={s.editorList}>
          <li>/**</li>
          <li>* About me</li>
          <li>* I have 5 years of еxperience in web</li>
          <li>* development lorem ipsum dolor sit amet,</li>
          <li>* consectetur adipiscing elit, sed do eiusmod</li>
          <li>* tempor incididunt ut labore et dolore</li>
          <li>* magna aliqua. Ut enim ad minim veniam,</li>
          <li>* quis nostrud exercitation ullamco laboris</li>
          <li>* nisi ut aliquip ex ea commodo consequat.</li>
          <li>* Duis aute irure dolor in reprehenderit in</li>
          <li>*</li>
          <li>* Duis aute irure dolor in reprehenderit in</li>
          <li>* voluptate velit esse cillum dolore eu fugiat</li>
          <li>* nulla pariatur. Excepteur sint occaecat</li>
          <li>* officia deserunt mollit anim id est laborum.</li>
          <li>*/</li>
        </ul>
        <div className={s.scrollbar}>
          <span className={s.scrollthumb}>O</span>
        </div>
      </div>
      <div className={s.output}>
        <div className={s.tabs}></div>

        <p>// Code snippet showcase:</p>

        <div>
          <span>Snippet 1</span>
          <img src="/images/code-snippet.svg" alt="code snippet" />
        </div>
        <div>
          <span>Snippet 2</span>
          <img src="/images/code-snippet.svg" alt="code snippet" />
        </div>

        <div className={s.scrollbar}>
          <span className={s.scrollthumb}>O</span>
        </div>
      </div>
    </div>
  );
}
