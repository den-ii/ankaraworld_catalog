import { GridPart } from '@/components/ProductSection/GridPart'
import { Product } from '@/components/ProductSection/Product'
import { Context } from 'context'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import CollectionLayout from 'Layouts/CollectionLayout'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { productTypes } from 'data/types'
import Pagination from '@/components/Pagination'
// import Pagination from '../../components/Pagination'

function LaptopBags() {
  const { setBurger, allProducts, setNav } = useContext(Context)
  const [allLaptopBags, setLaptopBags] = useState<any>([])
  const [start, setStart] = useState(0)
  const [limit] = useState(10)

  const productsCollectionRef = collection(db, 'products')
  const q = query(productsCollectionRef, where('category', '==', 'laptop bags'))

  const getProducts = async () => {
    const data = await getDocs(q)
    setLaptopBags(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }
  useEffect(() => {
    setNav(false)
    setBurger(false)
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const laptopBags: JSX.Element[] = allLaptopBags.map((product: any) => (
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
          {laptopBags.filter(
            (x, index) => index >= start && index < limit + start,
          )}
        </GridPart>
        <Pagination
          selectStart={(num) => setStart(num)}
          start={start}
          limit={limit}
          amount={laptopBags.length}
        />
      </section>
    </>
  )
}
LaptopBags.PageLayout = CollectionLayout
export default LaptopBags
