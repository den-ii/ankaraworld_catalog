import HeroSection from '@/components/HeroSection'
import ProductSection from '@/components/ProductSection'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ankara World Catalog - Home</title>
        <link rel="icon" href="/assets/icon.svg" />
        <link
          rel="stylesheet"
          href="https://kit.fontawesome.com/d1b29e8e1a.css"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <main>
        <HeroSection />
        <ProductSection />
      </main>
    </div>
  )
}
