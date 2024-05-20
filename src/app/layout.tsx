import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Footer from "./layout/components/organisms/Footer";
import Header from "./layout/components/organisms/Header";
import Providers from "./common/utils/Providers";
import { Metadata } from "next";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-notoSansKr",
});

export const metadata: Metadata = {
  title: {
    default: "SkillFox | 채용공고 기술스택 분석",
    template: "SkillFox | %s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className}`}>
        <Providers>
          <main>
            <Header />

            <div className="min-h-[1000px] min-w-[320px] pb-24 pt-20">
              {children}
            </div>

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
