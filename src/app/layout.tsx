import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aksiaa Technologies | Network, Security, Cloud & IoT Infrastructure",
  description:
    "Aksiaa Technologies is a Mumbai-based systems integrator and distributor delivering network, security, cloud and IoT infrastructure with 5+ years of experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
