import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";


export const metadata = {
  title: "MTIP",
  description: "Montana Innovation Partnership",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-satoshi flex md:grid">
        <div className="justify-self-center w-full max-w-[1600px]">
        <Header/>
          {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
