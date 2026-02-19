import Home from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کافه پرشین آسیا | فروش قهوه و لوازم جانبی",
  description: "شرکت وب پرشین آسیا با ارائه خدمات حرفه‌ای در زمینه توسعه و مدیریت سازمان‌ها و کسب‌وکارها. دارای سیستم همکاری و قرارداد نویسی، سیستم استخدام و مدیریت همکاری، نمودار میزان پیشرفت شرکت، پنل پیامکی، مدیریت کاربران و داشبورد مدیریتی پیشرفته، طراحی مدرن با امنیت بالا و بهینه‌سازی شده برای سئو، همراه با پشتیبانی حرفه‌ای.",
  authors: [{ name: "وب پرشین آسیا" }],
  metadataBase: new URL("https://webpersianasia.com"), 
  generator: "Next.js 15 + Tailwind + Prisma + Typescript + Framer Motion + PostgreSQL + Gsap",
  icons: {
    icon: "/favicon.ico",
    },
  keywords: [
    "طراحی سایت شرکتی",
    "طراحی سایت شرکتی با کدنویسی اختصاصی",
    "طراحی سایت شرکتی واکنش‌گرا",
    "طراحی سایت با Next.js",
    "سایت شرکتی با Prisma و PostgreSQL",
    "شرکت اینترنتی امن و سریع",
    "طراحی سایت شرکتی حرفه ای در کرج",
    "طراحی سایت شرکتی وب پرشین آسیا",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "طراحی سایت شرکتی اختصاصی | وب پرشین آسیا",
    description:
      "شرکت اینترنتی فول امکانات با طراحی مدرن، امنیت بالا و سئو حرفه‌ای.",
    url: "http://localhost:3000/",
    siteName: "وب پرشین آسیا",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "طراحی سایت شرکتی اختصاصی | وب پرشین آسیا",
    description: "شرکت اینترنتی فول امکانات با طراحی مدرن، امنیت بالا و سئو حرفه‌ای.",
    site: "@WebPersianAsia",
    creator: "@WebPersianAsia",
    images: ["http://localhost:3000/images/twitter-card.jpg"],
  },  
  alternates: {
    canonical: "http://localhost:3000/",
  },
};

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <Home />
    </main>
  );
}

