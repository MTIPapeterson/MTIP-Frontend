import "./globals.css";
import Header from "./components/header";

export const metadata = {
  title: "MTIP",
  description: "Montana Innovation Partnership",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-satoshi">
        <Header/>
        {children}
      </body>
    </html>
  );
}
