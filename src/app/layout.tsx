import { Footer } from "@/components/common/footer/footer";
import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "../components/common/header/header";
import "../styles/globals.scss";
import { NewsGothic } from "@/styles/local-fonts";

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
