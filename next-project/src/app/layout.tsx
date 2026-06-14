import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "CRM & Setup - Автоматизация процессов и внедрение CRM",
  description: "Настраиваем CRM и автоматизируем продажи под реальные процессы бизнеса. Собираем систему, в которой заявки не теряются.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="antialiased">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-text-primary selection:bg-primary-light selection:text-primary-dark`}>
        <Header />
        <main className="flex-grow flex flex-col relative w-full overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
