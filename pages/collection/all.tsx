import { GridPart } from '@/components/ProductSection/GridPart'
import { Product } from '@/components/ProductSection/Product'
import { Context } from 'context'
import { shuffle } from 'utils'
import CollectionLayout from 'Layouts/CollectionLayout'
import Head from 'next/head'
import { useContext, useEffect } from 'react'

export default function All() {
  const { setBurger, allProducts, setNav } = useContext(Context)

  useEffect(() => {
    setBurger(false)
    setNav(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const allBags: JSX.Element[] = allProducts.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.prod_name}
        image={product.image}
        bottom={product.bottom}
      />
    )
  })
  return (
    <>
      <Head>
        <title>Ankara World Catalog | Collection</title>
        <link rel="icon" href="/assets/icon.svg" />
      </Head>

      <section style={{ minHeight: '100vh', paddingBottom: '3rem' }}>
        <GridPart>{allBags}</GridPart>
      </section>
    </>
  )
}
All.PageLayout = CollectionLayout
