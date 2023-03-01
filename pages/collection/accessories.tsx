import { GridPart } from '@/components/ProductSection/GridPart'
import { Product } from '@/components/ProductSection/Product'
import { Context } from 'context'
import CollectionLayout from 'Layouts/CollectionLayout'
import Head from 'next/head'
import { useContext, useEffect } from 'react'

export default function Accessories() {
  const { setBurger, allProducts, setNav } = useContext(Context)

  useEffect(() => {
    setBurger(false)
    setNav(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  //   const allBags: any[] = accessories.map((product) => {
  //     return (
  //       <Product
  //         key={product.id}
  //         id={product.id}
  //         name={product.prod_name}
  //         image={product.image}
  //         bottom={product.bottom}
  //       />
  //     )
  //   })

  return (
    <>
      <Head>
        <title>Ankara World Catalog | Collection</title>
        <link rel="icon" href="/assets/icon.svg" />
      </Head>
      <section style={{ minHeight: '100vh', paddingBottom: '3rem'}}>
        <div>Will be available soon</div>
        {/* <GridPart>{allBags}</GridPart> */}
      </section>
    </>
  )
}
Accessories.PageLayout = CollectionLayout
