import { Context } from 'context'
import CollectionLayout from 'Layouts/CollectionLayout'
import Head from 'next/head'
import router, { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

function All() {
  const { setBurger, setNav } = useContext(Context)
  const router = useRouter()

  useEffect(() => {
    setNav(false)
    setBurger(false)
    router.push(`/collection/all`)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Ankara World Catalog | Collection</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>

      <section style={{ minHeight: '100vh', paddingBottom: '3rem' }}></section>
    </>
  )
}
All.PageLayout = CollectionLayout
export default All
