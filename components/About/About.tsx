import s from "./About.module.scss";
// import "remixicon/fonts/remixicon.css";

type Props = {};

export default function About({}: Props) {
  return (
    <div className={s.about}>
      <div className={s.activityBar}>
        <ul className={s.activityBarList}>
          <li className={s.activityBarItem}>
            <i className="ri-terminal-box-fill social"></i>
          </li>
          <li className={s.activityBarItem}>
            <i className="ri-user-4-fill social"></i>
          </li>
          <li className={s.activityBarItem}>
            <i className="ri-gamepad-fill social"></i>
          </li>
        </ul>
      </div>
      <div className={s.sidebar}>
        <div className={s.sidebarWindow}>
          <h2 className={s.sidebarHeadline}>
            <i className="ri-arrow-drop-down-fill"></i>
            personal-info
          </h2>
          <ul className={s.sidebarList}>
            <li className={s.sidebarItem}>
              <i className="ri-arrow-right-s-line"></i>
              <i className={`ri-folder-3-fill ${s.red}`}></i>
              <span className={s.active}>bio</span>
            </li>
            <li className={s.sidebarItem}>
              <i className="ri-arrow-right-s-line"></i>
              <i className={`ri-folder-3-fill ${s.green}`}></i>
              <span>interests</span>
            </li>
            <li className={s.sidebarItem}>
              <i className="ri-arrow-down-s-line"></i>
              <i className={`ri-folder-3-fill ${s.purple}`}></i>
              <span>education</span>
            </li>
            <li className={s.sidebarItem}>
              <i className={`ri-arrow-down-s-line ${s.hiddenIcon}`}></i>
              <i className="ri-markdown-fill"></i>
              <span>high-school</span>
            </li>
            <li className={s.sidebarItem}>
              <i className={`ri-arrow-down-s-line ${s.hiddenIcon}`}></i>
              <i className="ri-markdown-fill"></i>
              <span>college</span>
            </li>
          </ul>
        </div>
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
      </div>
      <div className={s.editor}>
        <div className={s.tabs}>
          <div className={s.tabItem}>
            <span>personal-info</span>
            <i className="ri-close-line"></i>
          </div>
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
        <p className={s.editorParagraph}>
          I have 5 years of experience in web development lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div className={s.output}>
        <div className={s.tabs}></div>
        <div className={s.outputContent}>
          <p className={s.comment}>// Code snippet showcase:</p>
          <div className={s.snippet}>
            <div className={s.userDetails}>
              <span>img</span>
              <span>Snippet 1</span>
              <i className="ri-chat-smile-3-fill"></i> details
              <i className="ri-star-fill"></i> stars
            </div>
            <img src="/images/code-snippet-n.svg" alt="code snippet" />
          </div>
          <div className={s.snippet}>
            <div className={s.userDetails}>
              <span>img</span>
              <span>Snippet 2</span>
              <i className="ri-chat-smile-3-fill"></i> details
              <i className="ri-star-line"></i> stars
            </div>
            <img src="/images/code-snippet-2.svg" alt="code snippet" />
          </div>
        </div>
      </div>
    </div>
  );
}
