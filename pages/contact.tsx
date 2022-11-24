import Head from "next/head";
import ContactComponent from "@/components/Contact";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Giorgi Pasieshvili</title>
      </Head>

      <main id="main" className="main">
        <ContactComponent />
      </main>
    </>
  );
}
