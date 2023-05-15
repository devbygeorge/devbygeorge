import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <ul className={s.list}>
        <li className={s.item}>find me in:</li>
        <li className={s.item}>
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/devbygeorge"
            aria-label="Twitter Profile"
          >
            <i className="ri-twitter-fill icon"></i>
          </a>
        </li>
        <li className={s.item}>
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/giorgipasieshvili"
            aria-label="Linkedin Profile"
          >
            <i className="ri-linkedin-fill icon"></i>
          </a>
        </li>
        <li className={s.emptyItem}></li>
        <li className={s.item}>
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/devbygeorge"
            aria-label="Github Profile"
          >
            <span className={s.username}>@devbygeorge</span>
            <i className="ri-github-fill icon" data-active-desktop="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
