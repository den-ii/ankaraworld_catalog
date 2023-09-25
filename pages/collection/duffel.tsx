import { useContext, useEffect, useState } from 'react'
import { GridPart } from '../../components/ProductSection/GridPart'
import { Product } from '../../components/ProductSection/Product'
import Pagination from '../../components/Pagination'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import { Context } from 'context'
import CollectionLayout from '../../Layouts/CollectionLayout'
import Head from 'next/head'
import { productTypes } from 'data/types'

export default function Backpacks() {
  const { setBurger, allProducts, setNav } = useContext(Context)
  const [allDuffels, setDuffels] = useState<any>([])
  const [start, setStart] = useState(0)
  const [limit] = useState(10)

  const productsCollectionRef = collection(db, 'products')
  const q = query(productsCollectionRef, where('category', '==', 'duffels'))

  const getProducts = async () => {
    const data = await getDocs(q)
    setDuffels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  useEffect(() => {
    setBurger(false)
    setNav(false)
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const duffels: JSX.Element[] = allDuffels.map((product: any) => (
    <Product
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      bottom={product.top_position}
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
        {/* <div>Will be available soon</div> */}
        <GridPart>
          {duffels.filter(
            (x, index) => index >= start && index < limit + start,
          )}
        </GridPart>
        <Pagination
          selectStart={(num) => setStart(num)}
          start={start}
          limit={limit}
          amount={duffels.length}
        />
      </section>
    </>
  )
}
Backpacks.PageLayout = CollectionLayout
