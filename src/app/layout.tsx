import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import ThemeToggle from "./ThemeToggle";

export const metadata = {
  title: "Negro Services | Negro",
  description: "Site web de présentation de services, développement web et mobile",
   keywords: [
    "développeur web",
    "développeur mobile",
    "aws",
    "azure",
    "devops",
    "Next.js",
    "React",
    "Tailwind",
    "portfolio développeur",
  ],
  authors: [{ name: "Petito Tapondjou" }],
  creator: "Petito Tapondjou",
  metadataBase: new URL("https://negro-services.com"),
  openGraph: {
    title: "Petito Tapondjou | Développeur Web",
    description: "Site web de présentation de services, développement web et mobile",
    url: "https://negro-services.com.com",
    siteName: "Portfolio Petito Tapondjou",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Petito Tapondjou",
      },
    ],
    locale: "fr_FR",
    type: "website",
    robots: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
     <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHSW4M7T29');
          `}
        </Script>
      </head>
      <body className="transition-colors duration-500">
          {/* Toggle Dark/Light Mode */}
          <ThemeToggle />
          {/* Page content */}
          {children}

          {/* Floating WhatsApp */}
          <a
            href="https://wa.me/237600000000"
            target="_blank"
            className="fixed bottom-6 right-6 z-50 text-white hover:scale-110 transition"
          >
            <Image
              src="/img/whatsapp.svg"
              alt="Whatsapp logo"
              height={60}
              width={60}
            />
          </a>
      </body>
    </html>
  );
}