import React from "react";
import s from "./Header.module.scss";

type Props = {};

export default function Header({}: Props) {
  return (
    <div id="header" className={s.header}>
      I'm a Header
    </div>
  );
}
