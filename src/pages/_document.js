import { Html, Head, Main, NextScript } from 'next/document'

// Applies the theme before the page paints, so there's no light/dark flash:
// the visitor's saved choice if they made one, otherwise their device setting.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark){document.documentElement.classList.add('dark')}}catch(e){}})()`

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
