import { useContext, useEffect, useState } from 'react'
import { GridPart } from '@/components/ProductSection/GridPart'
import { Product } from '@/components/ProductSection/Product'
import { Context } from '../../context'
// import { shuffle } from 'utils'
import CollectionLayout from 'Layouts/CollectionLayout'
import Head from 'next/head'
import Pagination from '../../components/Pagination'
import { productTypes } from 'data/types'
export default function All() {
  const { setBurger, allProducts, setNav } = useContext(Context)
  const [start, setStart] = useState(0)
  const [limit] = useState(10)

  useEffect(() => {
    setBurger(false)
    setNav(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleItemsShown = () => {}
  const allBags: JSX.Element[] = allProducts.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        bottom={product.top_position}
      />
    )
  })
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
        <GridPart>
          {allBags.filter(
            (x, index) => index >= start && index < limit + start,
          )}
        </GridPart>
        <Pagination
          selectStart={(num) => setStart(num)}
          start={start}
          limit={limit}
          amount={allBags.length}
        />
      </section>
    </>
  )
}
All.PageLayout = CollectionLayout
