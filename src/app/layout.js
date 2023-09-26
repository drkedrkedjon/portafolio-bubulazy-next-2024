import "./globals.css";
import localFont from "next/font/local";

const monaSansFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "swap",
});

export const metadata = {
  title: "Portafolio y blog personal",
  description:
    "Este es mi portafolio y blog personal, donde comparto mis proyectos y artículos sobre tecnología.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={monaSansFont.className}
    >
      <body>{children}</body>
    </html>
  );
}
