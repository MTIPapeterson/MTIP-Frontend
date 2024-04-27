import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata = {
  title: "MTIP",
  description: "Montana Innovation Partnership",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-satoshi flex md:grid">
      <Header/>
        <div className="justify-self-center w-full">
          {children}
        <Footer/>
        </div>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
