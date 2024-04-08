import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Footer from "./features/layout/views/Footer";
import Header from "./features/layout/views/Header";
import Providers from "./features/common/utils/Providers";
import RouteNavigation from "./features/layout/views/RouteNavigation";
import AnalysisNavigation from "./features/layout/views/AnalysisNavigation";

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

            <div className="md:4 min-w-[320px] pb-24 pt-30">{children}</div>

            {/* <Footer /> */}
          </main>
        </Providers>
      </body>
    </html>
  );
}
