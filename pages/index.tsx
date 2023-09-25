import HeroSection from '../components/HeroSection'
import ProductSection from '../components/ProductSection'
import { ReviewCarousel } from '../components/ReviewCarousel'
import { Context } from '../context'
import Head from 'next/head'
import { addDoc, collection, setDoc } from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { db, storage } from './../firebase/config'
import allProducts from '../public/products.json'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { setBurger } = useContext(Context)

  useEffect(() => {
    setBurger(false)
    const products = allProducts
    for (const product of products) {
      const image = '../public' + product.image
      console.log(image)
      const storageRef = ref(storage, '../atinuke.jpeg')
      // getDownloadURL(storageRef)
      //   .then((url) => {
      //     // Insert url into an <img> tag to "download"
      //     product.image = url
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })
    }
    console.log(products)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Head>
        <title>Ankara World Catalog | Home</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <main>
        <HeroSection />
        <ProductSection />
        <ReviewCarousel />
      </main>
    </div>
  )
}
