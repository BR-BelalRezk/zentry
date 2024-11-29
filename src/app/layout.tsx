import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import ActiveSection from "@/context/ActiveSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Zentry",
  description: "Animated landing page for a gaming site",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`antialiased`}>
        <ActiveSection>
          <Header />
          <main className=" relative min-h-screen w-screen overflow-x-hidden">
            {children}
          </main>
        </ActiveSection>
        <Footer />
      </body>
    </html>
  );
}
