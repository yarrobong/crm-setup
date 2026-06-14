import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://crm-setup.example.com'),
  title: "CRM & Setup - Автоматизация процессов и внедрение CRM",
  description: "Настраиваем CRM и автоматизируем продажи под реальные процессы бизнеса. Собираем систему, в которой заявки не теряются.",
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'CRM & Setup',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "CRM & Setup",
    "url": "https://crm-setup.example.com",
    "description": "Настраиваем CRM и автоматизируем продажи под реальные процессы бизнеса.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    }
  };

  return (
    <html lang="ru" className="antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
