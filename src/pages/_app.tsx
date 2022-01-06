import 'tailwindcss/tailwind.css'
import '@fontsource/work-sans'
import '~/styles/globals.css'

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import { MessageProvider } from '~/lib/message'
import { AuthProvider } from '~/lib/auth'
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  const pageMeta = (Component as any)?.defaultProps?.meta || {}
  const pageSEO = { ...SEO, ...pageMeta }

  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...pageSEO} />
      <MessageProvider>
        現在開発中の為、不具合等がある可能性があります。<br />
        何卒宜しくお願い致します。
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </MessageProvider>
    </React.Fragment>
  )
}

export default MyApp
