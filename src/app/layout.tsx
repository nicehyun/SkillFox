import "./globals.css";
import Footer from "./layout/components/organisms/Footer";
import Header from "./layout/components/organisms/Header";
import Providers from "./common/utils/Providers";
import { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import dynamic from "next/dynamic";

const DynamicFooter = dynamic(
  () => import("./layout/components/organisms/Footer"),
  { ssr: false },
);

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "SkillFox",
  referrer: "origin-when-cross-origin",
  keywords: [
    "채용공고",
    "기술",
    "분석",
    "프론트엔드",
    "백엔드",
    "데이터 엔지니어",
    "데이터 분석가",
    "머신러닝",
  ],
  authors: [{ name: "Noah", url: "https://github.com/nicehyun" }],
  creator: "Noah Lee",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/images/logo.webp",
  },
  title: {
    default: "SkillFox | 채용공고 기술 분석",
    template: "SkillFox | %s",
  },
  description: "채용공고 자격 요건 기술 스택 분석",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        <Providers>
          <Header />
          <main>
            <div className="min-w-[320px] pb-24 pt-20">{children}</div>
          </main>
          <DynamicFooter />
        </Providers>
      </body>
    </html>
  );
}
