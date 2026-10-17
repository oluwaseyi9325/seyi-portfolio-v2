import { Html, Head, Main, NextScript } from 'next/document'

// Applies the theme before the page paints, so there's no light/dark flash:
// dark by default, or light if the visitor chose it with the toggle.
const themeScript = `(function(){try{if(localStorage.getItem('theme')!=='light'){document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})()`

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
