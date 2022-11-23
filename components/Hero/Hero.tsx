import s from "./Hero.module.scss";
// import "remixicon/fonts/remixicon.css";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className={s.hero}>
      <div className={`container ${s.content}`}>
        <div className={s.text}>
          <h1 className={s.headline}>
            <span className={s.textWelcome}>Hi all. I am</span>
            <span className={s.textName}>George Pasieshvili</span>
            <span className={s.textRole}>
              <i className="ri-arrow-right-s-line"></i> Front-end developer
            </span>
          </h1>

          <div className={s.snippets}>
            <p className={s.comment}>// find my profile on Github:</p>
            <p className={s.variable}>
              <span className={s.variableKey}>const </span>
              <span className={s.variableName}>githubLink </span>
              <span>= </span>
              <span className={s.variableQuota}>"</span>
              <a
                className={s.variableString}
                href="https://github.com/GiorgiPasieshvili"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/GiorgiPasieshvili
              </a>
              <span className={s.variableQuota}>"</span>
            </p>
          </div>
        </div>

        <img className={s.blurs} src="/images/bg-blurs.png" alt="bg blurs" />

        <div className={s.imagesWrapper}>
          <div className={s.images}>
            <img
              className={s.opacityLow}
              src="/images/code-snippet-n.svg"
              alt="code snippet"
            />
            <img
              className={s.opacityHalf}
              src="/images/code-snippet-n.svg"
              alt="code snippet"
            />
            <img
              className={s.opacityFull}
              src="/images/code-snippet-n.svg"
              alt="code snippet"
            />
            <img
              className={s.opacityHalf}
              src="/images/code-snippet-n.svg"
              alt="code snippet"
            />
            <img
              className={s.opacityLow}
              src="/images/code-snippet-n.svg"
              alt="code snippet"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
