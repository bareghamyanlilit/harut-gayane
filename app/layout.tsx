import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Հարութ և Գայանե",
  description: "Հարութ և Գայանե",
  openGraph: {
    title: "Հարութի և Գայանեի նշանադրության հրավիրատոմս",
    description: "Նշանադրության հրավիրատոմս",
    url: "https://harut-gayane.vercel.app",
    siteName: "Հարութ և Գայանե",
    images: [
      {
        url: "/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
