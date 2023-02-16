import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { MyContext } from 'context'
import Layout from 'Layouts'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyContext>
  )
}
