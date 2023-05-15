"use client";

import { useState } from "react";

import Link from "next/link";

import s from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((state) => !state);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={s.header} data-active={isMenuOpen ? "true" : "false"}>
      {/* Navigation */}
      <nav className={s.nav}>
        {/* Heading/Logo */}
        <h1 className={s.logo}>
          <Link href="/" onClick={closeMenu}>
            giorgi-pasieshvili
          </Link>
        </h1>

        {/* Mobile Toggle */}
        <button
          className={s.toggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i
            className="ri-menu-line small-transition-mobile"
            data-active={isMenuOpen ? "false" : "true"}
          />
          <i
            className="ri-close-line small-transition-mobile"
            data-active={isMenuOpen ? "true" : "false"}
          />
        </button>

        {/* Navigation Menu */}
        <ul
          className={`${s.menu} small-transition-mobile`}
          data-active={isMenuOpen ? "true" : "false"}
        >
          <li className={s.item}>
            <Link className={s.link} href="/" onClick={closeMenu}>
              _hello
            </Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} href="/about" onClick={closeMenu}>
              _about-me
            </Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} href="/projects" onClick={closeMenu}>
              _projects
            </Link>
          </li>
          <li className={s.emptyItem}></li>
          <li className={s.item}>
            <Link className={s.link} href="/contact" onClick={closeMenu}>
              _contact-me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
