import "./globals.css";

export const metadata = {
  title: "Portafolio y blog personal",
  description:
    "Este es mi portafolio y blog personal, donde comparto mis proyectos y artículos sobre tecnología.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
