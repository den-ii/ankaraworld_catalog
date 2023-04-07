import { ProductCarousel } from '@/components/ProductCarousel'
import { Context } from 'context'
import { productTypes } from 'data/types'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
export const getStaticPaths = async () => {
  const res = await fetch('https://ankaraworldserver.netlify.app/products.json')

  // const data = products
  const data = await res.json()
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
  const res = await fetch('https://ankaraworldserver.netlify.app/products.json')

  // const data = products
  const allData = await res.json()
  // const allData = products
  const data = allData.filter((product: { id: any }) => {
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
          {product[0].carousel && (
            <div className="image-container">
              <ProductCarousel carousel={product[0].carousel} />
            </div>
          )}
          {!product[0].carousel && (
            <div className="image-container">
              <Image
                src={product[0].image}
                fill
                className="img view-img"
                sizes="(min-width: 1000px) 640px, (min-width: 640px) 50vw, 100vw"
                alt="product carousel"
              />
            </div>
          )}
          <div className="description" style={{ marginTop: '3rem' }}>
            <h2>{product[0].prod_name}</h2>
            <p style={{ marginTop: '1rem' }}>{product[0].details}</p>
            <p style={{ marginTop: '1rem' }}>
              Price:{' '}
              <b style={{ marginLeft: '0.5rem' }}> NGN {product[0].price}</b>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Wholesale Price:{' '}
              <b style={{ marginLeft: '0.5rem' }}>
                NGN {product[0].whole_sale}
              </b>
            </p>
            <p style={{ marginTop: '0.5rem' }}>
              Bulk Price:{' '}
              <b style={{ marginLeft: '0.5rem' }}>
                {' '}
                NGN {product[0].bulk_price}
              </b>
            </p>
            <p>Minimum Order Quantity(Bulk) : {product[0].moq_bulk}</p>
            <p>
              Minimum Order Quantity(Wholesale) : {product[0].moq_whole_sale}
            </p>
          </div>
        </ProductContainer>
      </main>
    </>
  )
}
export default Product
