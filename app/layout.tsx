import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layouts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ContentfulClient } from "@/lib/contentful/contentful";
import { NavigationCollectionObj } from "@/lib/contentful/model/navigation";
import { HeaderCollectionObj } from "@/lib/contentful/model/header";
import { ToFooterProps, ToHeaderProps } from "@/lib/contentful/extensions/mapper";
import logger from "@/lib/winston/logger";
import { notFound } from "next/navigation";
import { AnimatePresence } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Experience the unparalleled luxury and world-class hospitality",
  title: {
    default: "Welcome to Wynn Resorts | Wynn Resort, Limited",
    template: "%s | Wynn Resort, Limited",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // fetch navigation data from contentful
  const res: {headerCollection: HeaderCollectionObj, navigationCollection: NavigationCollectionObj, footerCollection: NavigationCollectionObj}|null = await ContentfulClient.getNavigation("corp-navigation", "corp-header", "corp-footer");
  
  // if fetch fails, log error and show 404 page
  if (res === null) {
    logger.error("Failed to fetch navigation data");
    notFound();
  }

  // map contentful data to header props
  const headerProps = ToHeaderProps(res.headerCollection, res.navigationCollection);
  const footerProps = ToFooterProps(res.headerCollection, res.footerCollection);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <AnimatePresence mode="sync">
        <body className="min-h-full flex flex-col">
          <MainLayout>
            <Header {...headerProps} />
            {children}
            <Footer {...footerProps} />
          </MainLayout>
        </body>
      </AnimatePresence>
    </html>
  );
}
