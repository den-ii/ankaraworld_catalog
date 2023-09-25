import { useContext, useEffect, useState } from 'react'
import { GridPart } from '@/components/ProductSection/GridPart'
import { Product } from '@/components/ProductSection/Product'
import { Context } from '../../context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import CollectionLayout from 'Layouts/CollectionLayout'
import Head from 'next/head'
import Pagination from '../../components/Pagination'
import { productTypes } from 'data/types'

function Bags() {
  const { setBurger, allProducts, setNav } = useContext(Context)
  const [allHandBags, setHandBags] = useState<any>([])
  const [start, setStart] = useState(0)
  const [limit] = useState(10)

  const productsCollectionRef = collection(db, 'products')
  const q = query(productsCollectionRef, where('category', '==', 'hand bags'))

  const getProducts = async () => {
    const data = await getDocs(q)
    setHandBags(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    setBurger(false)
    setNav(false)
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handBags: JSX.Element[] = allHandBags.map((product: any) => (
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
        <GridPart>
          {handBags.filter(
            (x, index) => index >= start && index < limit + start,
          )}
        </GridPart>
        <Pagination
          selectStart={(num) => setStart(num)}
          start={start}
          limit={limit}
          amount={handBags.length}
        />
      </section>
    </>
  )
}
Bags.PageLayout = CollectionLayout
export default Bags
