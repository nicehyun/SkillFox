import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Footer from "./features/layout/views/Footer";
import Header from "./features/layout/views/Header";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-notoSansKr",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className}>
        <main>
          <Header />

          <div className="md:4 min-w-[320px] px-10 pb-24 pt-30 sm:px-2 md:px-4">
            {children}
          </div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
