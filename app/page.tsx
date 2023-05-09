import Image from "next/image";

import s from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <main className={s.home}>
        <Image
          className={s.blurs}
          src="/images/blurs.png"
          alt="blurs"
          width={1128}
          height={1030}
          quality={100}
          style={{ objectFit: "contain" }}
          priority
        />

        <div className={s.leftColumn}>
          <div>
            <p className={s.introWelcome}>Hi all. I am</p>
            <p className={s.introName}>George</p>
            <p className={s.introRole}>
              <i className="ri-arrow-right-s-line" /> Software engineer
            </p>
          </div>

          <div className={s.githubArea}>
            <p className={s.githubComment}>{"// find my profile on Github:"}</p>
            <p className={s.githubLinkWrapper}>
              <span className="color-purple">const </span>
              <span className="color-green">githubLink </span>
              <span>= </span>
              <span className="color-brown">&quot;</span>
              <a
                className="url"
                href="https://github.com/devbygeorge"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/devbygeorge
              </a>
              <span className="color-brown">&quot;</span>
            </p>
          </div>
        </div>

        <div className={s.rightColumn}>
          <div className={s.snippets}>
            <div className={s.snippetImage}>
              <Image
                className="opacity-low"
                src="/images/code-snippet-n.svg"
                alt="code snippet"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className={s.snippetImage}>
              <Image
                className="opacity-half"
                src="/images/code-snippet-n.svg"
                alt="code snippet"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className={s.snippetImage}>
              <Image
                src="/images/code-snippet-n.svg"
                alt="code snippet"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className={s.snippetImage}>
              <Image
                className="opacity-half"
                src="/images/code-snippet-n.svg"
                alt="code snippet"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div className={s.snippetImage}>
              <Image
                className="opacity-low"
                src="/images/code-snippet-n.svg"
                alt="code snippet"
                fill
                quality={100}
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
