import type { Metadata } from "next";
import "./globals.css"; // Tailwind css dosyasını çeker

export const metadata: Metadata = {
  title: "Asymatrix | Web3 Terminal",
  description: "Uncover the Asymmetric Gap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0E1117] text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
