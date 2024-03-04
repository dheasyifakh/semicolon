import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tit;koma",
  description: "Find your Theraphist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:px-20 shadow-md">
          <Header/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
