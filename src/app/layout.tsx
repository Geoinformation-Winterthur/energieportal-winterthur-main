import { Footer } from "@/components/common/footer/footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "../components/common/header/header";
import "../styles/globals.scss";
import { Suspense } from "react";

export const NewsGothic = localFont({
  src: [
    {
      path: "../../public/fonts/NewsGothic-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/NewsGothic-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-news-gothic",
});

export const metadata: Metadata = {
  title: "Energieportal Winterthur",
  description: "Das Energieportal der Stadt Winterthur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body className={NewsGothic.className}>
        <Suspense>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
