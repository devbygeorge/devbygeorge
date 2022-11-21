import React from "react";
import s from "./Footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div id="footer" className={s.footer}>
      I'm a Header
    </div>
  );
}
