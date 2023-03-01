import '@/styles/global.css'
import type { AppProps } from 'next/app'
import React from 'react'
import App from 'next/app'
import { MyContext } from 'context'
import Layout from 'Layouts/SiteLayout'

// export default function App({ Component, pageProps }) {

//   return getLayout(
//     <MyContext>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </MyContext>,
//   )
// }
type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: any
  }
}

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const { PageLayout, ...rest } = Component
  return (
    <MyContext>
      <Layout>
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Layout>
    </MyContext>
  )
}

export default MyApp

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props

//     const Layout = Component.Layout || SiteLayout

//     return (
//       <MyContext>
//         <SiteLayout>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </SiteLayout>
//       </MyContext>
//     )
//   }
// }

// export default MyApp
