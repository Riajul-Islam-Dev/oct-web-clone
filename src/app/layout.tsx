import type { Metadata } from "next";
import { Ubuntu, Raleway } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Travel Portal",
  description: "All in one travel portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${ubuntu.variable} ${raleway.variable}`}>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
