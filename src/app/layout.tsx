import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/shared/components/Header";
import ChatBox from "@/features/chat/components/ChatBox";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const starWars = localFont({
  src: [
    {
      path: "../../public/fonts/Starjedi.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-starwars",
});

export const metadata: Metadata = {
  title: "SWOR.FR - Star Wars Roleplay",
  description: "Star Wars Roleplay Forum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${cinzel.variable} ${starWars.variable} font-sans bg-black min-h-screen text-gray-200 antialiased`}>
        <div className="min-h-screen bg-black">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <ChatBox />
        </div>
      </body>
    </html>
  );
}

