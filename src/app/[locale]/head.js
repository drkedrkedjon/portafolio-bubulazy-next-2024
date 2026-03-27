export default function Head() {
  return (
    <>
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
        content="@drkedrkedjon@mastodon.alexdebosnia.eu"
      />
    </>
  );
}
