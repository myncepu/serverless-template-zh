import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { initGA, logPageView } from '../utils/ga'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }, [])

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Hello next.js!"
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { property: 'og:title', content: 'Hello next.js!' },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
