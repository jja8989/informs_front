import type { Metadata } from "next";
import "./globals.css";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Mapping the Past to Build the Future",
  description: "Evaluation Report Clustering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 grid grid-cols-[auto_1fr]">
          <Sidebar />
          <main className="flex-1 grid grid-rows-[1fr_40px]">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
