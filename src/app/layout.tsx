import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Software Engineer Portfolio",
  openGraph: {
    title: "Your Name — Portfolio",
    description: "Software Engineer Portfolio",
    type: "website",
  },
  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-gradient-to-b from-black via-neutral-950 to-brand-dark text-neutral-100 antialiased">
        <div className="mx-auto max-w-5xl px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}