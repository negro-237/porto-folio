import Image from "next/image";
import "./globals.css";
import ThemeToggle from "./ThemeToggle";

export const metadata = {
  title: "Portfolio | Coming Soon",
  description: "A modern portfolio built with Next.js and Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
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