import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "찰규의 작업 공간",
  description: "찰규의 작업 공간에 오신 것을 환영합니다.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "찰규의 작업 공간",
    description: "찰규의 작업 공간에 오신 것을 환영합니다.",
    url: "https://gyuspace.vercel.app",
    siteName: "찰규의 작업 공간",
    images: [
      {
        url: "/opImage.png",
        width: 800,
        height: 600,
        alt: "찰규의 작업 공간",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
