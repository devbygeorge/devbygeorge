import Head from "next/head";
import s from "@/styles/Hero.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { GetStaticProps } from "next";
import { Social } from "typings";
import { fetchSocials } from "utils/fetchSocials";

type Props = {
  socials: Social[];
};

export default function Home({ socials }: Props) {
  return (
    <>
      <Head>
        <title>Welcome - Giorgi Pasieshvili</title>
      </Head>

      <Header />

      <main id="main" className="main">
        <div className={s.hero}>
          <div className={`container ${s.content}`}>
            <div className={s.text}>
              <h1 className={s.headline}>
                <span className={s.textWelcome}>Hi all. I am</span>
                <span className={s.textName}>George</span>
                <span className={s.textRole}>
                  <i className="ri-arrow-right-s-line"></i> Software engineer
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
                    href="https://github.com/devbygeorge"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/devbygeorge
                  </a>
                  <span className={s.variableQuota}>"</span>
                </p>
              </div>
            </div>

            <img
              className={s.blurs}
              src="/images/bg-blurs.png"
              alt="bg blurs"
            />

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
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a requst comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
