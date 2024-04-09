import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Footer from "./layout/views/Footer";
import Header from "./layout/views/Header";
import Providers from "./common/utils/Providers";

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
      <body className={`${notoSansKr.className} bg-secondary`}>
        <Providers>
          <main>
            <Header />

            <div className="min-w-[320px] pb-24 pt-30">{children}</div>

            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
