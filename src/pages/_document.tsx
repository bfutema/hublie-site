import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://app.boteria.com.br/cdn/webchat/webchat.v2.css" />

        <Script src="https://app.boteria.com.br/cdn/libs/showdown.min.js" strategy="beforeInteractive" />
        <Script src="https://app.boteria.com.br/cdn/libs/axios.js" strategy="beforeInteractive" />
        <Script src="https://app.boteria.com.br/cdn/libs/socket.io.js" strategy="beforeInteractive" />
        <Script src="https://app.boteria.com.br/cdn/webchat/webchat.js" strategy="beforeInteractive" />

        <Script id="code7" strategy="afterInteractive">
          {`window.renderBotWidget('634da1b79ea0f500181dc583');`}
        </Script>
      </Head>

      <body>
        <Main />

        <NextScript />

        <Script src="https://plugin.handtalk.me/web/latest/handtalk.min.js" strategy="beforeInteractive" />

        <Script id="hand-talk" strategy="afterInteractive">
          {`var ht = new HT({ token: "62af5efa5403fedaae8ea9f6eada1a24", avatar:"MAYA", pageSpeech: true });`}
        </Script>
      </body>
    </Html>
  )
}
