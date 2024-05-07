import localFont from "next/font/local";

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