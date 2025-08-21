import "./globals.css";
import localFont from "next/font/local";
import { BASE_METADATA } from "@/app/[locale]/utilities/constants";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { getMessages } from "next-intl/server";
// import { NextIntlClientProvider } from "next-intl";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const monaSansFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  display: "fallback",
});

export const metadata = BASE_METADATA;

export default async function RootLayout({ children, params }) {
  // antes solo RootLayout(props)
  // const params = await props.params;

  // const { locale } = params;
  // const { children } = props;

  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

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
        <meta
          name="fediverse:creator"
          content="@Drkedrkedjon@mastodon.social"
        ></meta>
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
