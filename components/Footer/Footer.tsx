import s from "./Footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id="footer" className={s.footer}>
      <ul className={s.list}>
        <li className={s.item}>find me in:</li>
        <li className={s.item}>
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer"
            href="https://facebook.com"
          >
            <i className={`ri-facebook-fill social ${s.icon}`}></i>
          </a>
        </li>
        <li className={s.item}>
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/giorgipasieshvili"
          >
            <i className={`ri-linkedin-fill social ${s.icon}`}></i>
          </a>
        </li>
        <li className={`${s.item} ${s.emptyItem}`}></li>
        <li className={s.item}>
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/GiorgiPasieshvili"
          >
            <span className={s.username}>@GiorgiPasieshvili</span>
            <i className={`ri-github-fill social ${s.icon} ${s.gitIcon}`}></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
