import type { Metadata } from "next";
import { Archivo, Caudex } from 'next/font/google';
import "./globals.css";


export const metadata: Metadata = {
  title: "ClothingCo",
  description: "Gen AI Hackathon",
};

const caudex = Caudex({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caudex',
  weight: ['400', '700'],
})
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caudex.variable + ' ' + archivo.variable}>
        {children}
      </body>
    </html>
  )
}




