import "./globals.css";
import localFont from "next/font/local";
import { BASE_METADATA } from "@/app/[locale]/utilities/constants";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import { getMessages } from "next-intl/server";
// import { NextIntlClientProvider } from "next-intl";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { MotionConfig } from "motion/react";

const monaSansFont = localFont({
  src: "./assets/Mona-Sans.woff2",
  // display: "fallback",
  display: "swap",
});

export const metadata = BASE_METADATA;

// Static rendering shit only here in Layout
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

  // Enable static rendering - all pages
  setRequestLocale(locale);

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
        <MotionConfig reducedMotion="user">
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
            <div id="nav-menu-root"></div>
          </NextIntlClientProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
