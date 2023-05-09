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
          >
            <span className={s.username}>@devbygeorge</span>
            <i className="ri-github-fill icon" data-active-desktop="true"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
