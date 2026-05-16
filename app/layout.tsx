import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lydear-tools.com"),
  title: {
    default: "Lydear Tools | 毎日の作業を、もっと軽やかにするWebツールBOX",
    template: "%s | Lydear Tools",
  },
  description:
    "Lydear Tools は、ファイル変換・ドキュメント整形・画像処理など、毎日の作業をブラウザだけで完結できる無料Webツールを集めたサービスです。インストール不要・登録不要で、すぐに使えます。",
  keywords:
    "Webツール,無料ツール,ファイル変換,Markdown変換,Office変換,オンラインツール,Lydear Tools",
  icons: {
    icon: "/lydear_logo_nonbackgraund.png",
    shortcut: "/lydear_logo_nonbackgraund.png",
    apple: "/lydear_logo_nonbackgraund.png",
  },
  openGraph: {
    title: "Lydear Tools | 毎日の作業を、もっと軽やかに",
    description:
      "ファイル変換・ドキュメント整形・画像処理など、ブラウザだけで完結する無料Webツール集。",
    type: "website",
    locale: "ja_JP",
    url: "https://lydear-tools.com",
    siteName: "Lydear Tools",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased bg-white min-h-screen`}
      >
        <Header />
        <main className="pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
