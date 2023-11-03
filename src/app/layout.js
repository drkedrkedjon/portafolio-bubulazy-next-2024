import "./globals.css";
import localFont from "next/font/local";
import { BASE_METADATA } from "@/app/utilities/constants";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

const monaSansFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "swap",
});

export const metadata = BASE_METADATA;

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={monaSansFont.className}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
