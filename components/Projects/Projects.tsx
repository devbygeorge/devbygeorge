import React from "react";
import s from "./Projects.module.scss";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className={s.projects}>
      {/* Sidebar */}
      <div className={s.sidebar}>
        <h2 className={s.sidebarHeadline}>
          <i className="ri-arrow-drop-down-fill"></i>
          projects
        </h2>{" "}
        <ul className={s.sidebarList}>
          <li className={s.sidebarListItem}>
            <i className="ri-checkbox-fill"></i>
            <i className="ri-reactjs-fill"></i>
            <span>React</span>
          </li>
          <li className={s.sidebarListItem}>
            <i className="ri-checkbox-blank-line"></i>
            <i className="ri-html5-fill"></i>
            <span>HTML</span>
          </li>
          <li className={s.sidebarListItem}>
            <i className="ri-checkbox-blank-line"></i>
            <i className="ri-css3-fill"></i>
            <span>CSS</span>
          </li>
          <li className={s.sidebarListItem}>
            <i className="ri-checkbox-fill"></i>
            <i className="ri-vuejs-fill"></i>
            <span>Vue</span>
          </li>
          <li className={s.sidebarListItem}>
            <i className="ri-checkbox-blank-line"></i>
            <i className="ri-angularjs-fill"></i>
            <span>Angular</span>
          </li>
          <li className={s.sidebarListItem}>
            <i className="ri-checkbox-blank-line"></i>
            <i className="ri-gatsby-fill"></i>
            <span>Gatsby</span>
          </li>
          <li className={s.sidebarListItem}>
            <i className="ri-checkbox-blank-line"></i>
            <i className="ri-flutter-fill"></i>
            <span>Flutter</span>
          </li>
        </ul>
      </div>

      {/* Tabs */}
      <div className={s.tabs}>
        <div className={s.tabItem}>
          <span>React; Vue</span>
          <i className="ri-close-line"></i>
        </div>
      </div>

      {/* Projects Cards */}
      <div className={s.grid}>
        {/* Card 1 */}
        <div className={s.cardWrapper}>
          <div className={s.cardName}>
            <span>Project 1</span>
            <span>// _ui-animations</span>
          </div>
          <div className={s.card}>
            <img src="/images/card-1.png" alt="card img" />
            <div className={s.icon}>
              <i className="ri-reactjs-fill"></i>
            </div>
            <div className={s.cardContent}>
              <p>Duis aute irure dolor in velit esse cillum dolore.</p>
              <button className="button">view-project</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={s.cardWrapper}>
          <div className={s.cardName}>
            <span>Project 2</span>
            <span>// _tetris-game</span>
          </div>
          <div className={s.card}>
            <img src="/images/card-2.png" alt="card img" />
            <div className={s.icon}>
              <i className="ri-reactjs-fill"></i>
            </div>
            <div className={s.cardContent}>
              <p>Duis aute irure dolor in velit esse cillum dolore.</p>
              <button className="button">view-project</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={s.cardWrapper}>
          <div className={s.cardName}>
            <span>Project 3</span>
            <span>// _etherium</span>
          </div>
          <div className={s.card}>
            <img src="/images/card-3.png" alt="card img" />
            <div className={s.icon}>
              <i className="ri-vuejs-fill"></i>
            </div>
            <div className={s.cardContent}>
              <p>Duis aute irure dolor in velit esse cillum dolore.</p>
              <button className="button">view-project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
