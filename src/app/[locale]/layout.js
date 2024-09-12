import "./globals.css";
import localFont from "next/font/local";
import { BASE_METADATA } from "@/app/[locale]/utilities/constants";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const monaSansFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "swap",
});

export const metadata = BASE_METADATA;

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={monaSansFont.className}
    >
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Example Feed"
          href="/rss.xml"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/site.webmanifest"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children};
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
