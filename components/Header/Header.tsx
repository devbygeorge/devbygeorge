import Link from "next/link";
import { useState } from "react";
import s from "./Header.module.scss";

type Props = {};

export default function Header({}: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className={`${s.header} ${isMenuOpen ? s.active : ""}`}>
      <nav className={s.nav}>
        {/* Navigate Home */}
        <div className={s.home}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            giorgi-pasieshvili
          </Link>

          {/* Toggle Button */}
          <button
            onClick={() => setMenuOpen((state) => !state)}
            className={`${s.toggle} ${isMenuOpen ? s.toggleActive : ""}`}
          >
            <i className="ri-menu-line"></i>
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* Menu List */}
        <ul className={`${s.list} ${isMenuOpen ? s.listActive : ""}`}>
          <li className={s.item}>
            <Link
              className={s.link}
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              _hello
            </Link>
          </li>
          <li className={s.item}>
            <Link
              className={s.link}
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              _about-me
            </Link>
          </li>
          <li className={s.item}>
            <Link
              className={s.link}
              href="/projects"
              onClick={() => setMenuOpen(false)}
            >
              _projects
            </Link>
          </li>
          <li className={`${s.item} ${s.emptyItem}`}></li>
          <li className={s.item}>
            <Link
              className={s.link}
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              _contact-me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
