import { useState } from "react";
import Link from "next/link";
import s from "./Header.module.scss";
import "remixicon/fonts/remixicon.css";

type Props = {};

export default function Header({}: Props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className={s.header}>
      <nav className={s.nav}>
        {/* Navigate Home */}
        <div className={s.home}>
          <Link href="/">giorgi-pasieshvili</Link>

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
            <Link className={s.link} href="/">
              _hello
            </Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} href="/about">
              _about-me
            </Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} href="/projects">
              _projects
            </Link>
          </li>
          <li className={`${s.item} ${s.emptyItem}`}></li>
          <li className={s.item}>
            <Link className={s.link} href="/contact">
              _contact-me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
