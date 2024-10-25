import { Outfit } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
//import 'react-toastify/dist/ReactToastify.css';

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "BgRemoval",
  description: "This website removes background of an image"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}