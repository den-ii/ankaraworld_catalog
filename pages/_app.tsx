import '@/styles/global.css'
import type { AppProps } from 'next/app'
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://fc2ae827d2e049728881611a000d02bf@o4504673578647552.ingest.sentry.io/4504673581924352',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
