import { GridPart } from '@/components/ProductSection/GridPart'
import { Product } from '@/components/ProductSection/Product'
import { Context } from 'context'
import CollectionLayout from 'Layouts/CollectionLayout'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import { productTypes } from 'data/types'

function Bags() {
  const { setBurger, allProducts, setNav } = useContext(Context)
  useEffect(() => {
    setBurger(false)
    setNav(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const allBags: JSX.Element[] = allProducts
    .filter((product) => product.prod_section === 'hand_bags')
    .map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.prod_name}
        image={product.image}
        bottom={product.bottom}
      />
    ))

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
      <section style={{ minHeight: '100vh', paddingBottom: '3rem' }}>
        <GridPart>{allBags}</GridPart>
      </section>
    </>
  )
}
Bags.PageLayout = CollectionLayout
export default Bags
