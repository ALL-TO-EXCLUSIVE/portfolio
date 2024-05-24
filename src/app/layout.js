import { Inter } from "next/font/google";
import "./globals.css";
import ShowNavbarOrNot from "@/components/ShowNavbarOrNot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dev Patel",
  description: "Dev Patel || Portfolio",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShowNavbarOrNot/>
        {children}
        </body>
    </html>
  );
}
