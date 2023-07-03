import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl" className="scroll-smooth">
        <Head>
          <link rel="icon" href="/static/favicon.ico" sizes="any" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
          <meta
            name="google-site-verification"
            content="7MaPBsR5Dfz7s6_FzrN7u-FZo8fToWXC1si8_dvmyzs"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-DGKC6DPEFW"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-DGKC6DPEFW');
    `,
            }}
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
