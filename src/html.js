import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
    <head>
    
      <script defer src="https://book.getweave.com/text-connect/69dca75e-383c-4dd4-ac52-918c8a5a9cb3/widget.js"></script>
     
      <script>{
        "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WM9CV49N');"
        }</script>

      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="canonical" href="https://eastmeadowdentists.com/"/>

      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>

    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WM9CV49N"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    {props.postBodyComponents}
    <script src="//code.tidio.co/8lasjfcaqnmx8gexjih5djbwxoeuc8un.js" defer></script>
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
