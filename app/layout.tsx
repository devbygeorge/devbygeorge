import "@/styles/globals.scss";
import "remixicon/fonts/remixicon.css";
import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "devbygeorge",
  description: "Portfolio website of Giorgi Pasieshvili",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
      <Analytics />
    </html>
  );
}
