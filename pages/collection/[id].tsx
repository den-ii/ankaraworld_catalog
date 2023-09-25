import { ProductCarousel } from '@/components/ProductCarousel'
import { collection, getDocs } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import { Context } from 'context'
import { productTypes } from 'data/types'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'

const productsCollectionRef = collection(db, 'products')
const getProducts = async () => {
  const data = await getDocs(productsCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export const getStaticPaths = async () => {
  // const res = await fetch(
  //   'https://ankaraworldcatalog.netlify.app/products.json',
  // )

  // const data = products
  const data = await getProducts()
  const paths: any = data.map((product: { id: any }) => {
    return {
      params: { id: product.id },
    }
  })
  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id
  // const res = await fetch('https://ankaraworldcatalog.netlify.app/products.json')
  // const productsCollectionRef = collection(db, 'products')

  // 'https://ankaraworldserver.netlify.app/products.json',

  // const data = products
  const allData = await getProducts()
  console.log(allData)
  // const allData = products
  const data = allData.find((product: { id: any }) => {
    if (product.id === id) {
      return true
    } else {
      return false
    }
  })
  return {
    props: { product: data },
  }
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 2.5rem;
  padding: 3rem;
  /* align-items: center; */
  .image-container {
    position: relative;
    height: 300px;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }

  .view-img {
    border-radius: 10px;
  }
  .description {
    width: 100%;
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    .image-container {
      position: relative;
      height: 400px;
      width: 600px;
    }
  }
`
const Product = ({ product }: any) => {
  const { setBurger } = useContext(Context)

  useEffect(() => {
    setBurger(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Head>
        <title>Ankara World Catalog | Product</title>
        <link rel="icon" href="/assets/icon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <main>
        <ProductContainer>
          {product.carousel && (
            <div className="image-container">
              <ProductCarousel carousel={product.carousel} />
            </div>
          )}
          {!product.carousel?.length && (
            <div className="image-container">
              <Image
                src={product.image}
                fill
                className="img view-img"
                sizes="(min-width: 1000px) 640px, (min-width: 640px) 50vw, 100vw"
                alt="product carousel"
              />
            </div>
          )}
          <div className="description" style={{ marginTop: '3rem' }}>
            <h2>{product.name}</h2>
            <p style={{ marginTop: '1rem' }}>{product.description}</p>
            <p style={{ marginTop: '1rem' }}>
              Price:{' '}
              <b style={{ marginLeft: '0.5rem' }}> NGN {product.price}</b>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Wholesale Price:{' '}
              <b style={{ marginLeft: '0.5rem' }}>
                NGN {product.wholesale_price}
              </b>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Bulk Price:{' '}
              <b style={{ marginLeft: '0.5rem' }}> NGN {product.bulk_price}</b>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Dimensions : {product.dimensions}
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Minimum Order Quantity(Bulk) : 30pcs and above
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Minimum Order Quantity(Wholesale) : 6pcs and above
            </p>
          </div>
        </ProductContainer>
      </main>
    </>
  )
}
export default Product
