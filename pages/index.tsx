import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection'
import { ReviewCarousel } from '../components/ReviewCarousel'
import { Context } from '../context'
import Head from 'next/head'

import { useContext, useEffect } from 'react'

export default function Home() {
  const { setBurger } = useContext(Context)

  useEffect(() => {
    setBurger(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Head>
        <title>Ankara World Catalog | Home</title>
        <link rel="icon" href="/assets/icon.svg" />
      </Head>
      <main>
        <HeroSection />
        <ProductSection />
        <ReviewCarousel />
      </main>
    </div>
  )
}
