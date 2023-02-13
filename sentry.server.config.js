import * as Sentry from '@sentry/nextjs'

//process.env.NODE_ENV === 'production' &&
Sentry.init({
  dsn: 'https://fc2ae827d2e049728881611a000d02bf@o4504673578647552.ingest.sentry.io/4504673581924352',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})
