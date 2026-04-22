import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { MainLayout } from "@/components/layouts";
import Header from "@/components/header";
import { LinkObject } from "@/components/types/types";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome to Wynn Resorts | Wynn Resort, Limited",
  description: "Experience the unparalleled luxury and world-class hospitality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // fetch global data here, such as navigation or user data
  const copyrightText = `© {year} Wynn Resorts Holdings, LLC. All rights reserved.`;
  const logo = "https://images.ctfassets.net/d25vj3coyj0e/1yWB7bkYGT5alNEF5Wzvww/522dd51c67c7316c8be7914623430165/logo.png"
  const navigationLinks: LinkObject[] = [
    { displayName: 'Las Vegas', url: '/destination/las-vegas', alt: 'Las Vegas' },
    { displayName: 'Boston Harbor', url: '/destination/boston', alt: 'Boston' },
    { displayName: 'Macau', url: '/destination/macau', alt: 'Macau' },
    { displayName: 'Cotai', url: '/destination/cotai', alt: 'Cotai' },
    { displayName: 'Contact Us', url: '/contact', alt: 'Contact' },
  ];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <MainLayout>
            <Header logo={logo} menuItems={navigationLinks} />
            {children}
            <Footer
              copyrightText={copyrightText}
              logoUrl={logo}
              navigationLinks={navigationLinks}
            />
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
