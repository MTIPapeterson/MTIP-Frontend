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
      <body className="font-satoshi flex md:grid bg-white text-black">
      <Header/>
        <div className="justify-self-center w-full">
          {children}
        <Footer/>
        </div>
        <Analytics/>
        <SpeedInsights/>
        {/* <!-- Start of HubSpot Embed Code --> */}
            <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/20251044.js"></script>
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </html>
  );
}
