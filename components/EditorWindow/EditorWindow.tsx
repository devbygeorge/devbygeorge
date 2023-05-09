"use client";
import { useEffect, useState } from "react";

import s from "./EditorWindow.module.scss";

type Props = {
  about: string;
};

export default function EditorWindow({ about }: Props) {
  const [maxCharacters, setMaxCharacters] = useState(
    Math.floor(50 / window.devicePixelRatio)
  );
  const newRegexp = new RegExp(`.{0,${maxCharacters}}\\b`, "g");
  const splittedParagraph = about.match(newRegexp);

  useEffect(() => {
    function handleResize() {
      const maxCharacters = Math.floor(50 / window.devicePixelRatio);
      setMaxCharacters(maxCharacters);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.editorWindow}>
      <ul className={s.editorLinesList}>
        <li className={s.editorLineItem}>{"/**"}</li>
        <li className={s.editorLineItem}>* About me</li>
        {splittedParagraph?.map((line, i) => (
          <li className={s.editorLineItem} key={i}>
            * {line}
          </li>
        ))}
        <li className={s.editorLineItem}>{"*/"}</li>
      </ul>
      <p className={s.editorParagraph}>{about}</p>
    </div>
  );
}
