import { GridPart } from './GridPart'
import { SeeMore } from './SeeMore'
import { Product } from './Product'
import { ProductContainer } from './ProductContainer'
import { useContext } from 'react'
import { Context } from 'context'

const Footwear = () => {
  // const { allProducts } = useContext(Context)
  // console.log(allProducts)
  // const products = allProducts
  //   .filter((product) => {
  //     if (product.prod_section === 'footwear') {
  //       return (
  //         <Product
  //           key={product.id}
  //           id={product.id}
  //           name={product.prod_name}
  //           image={product.image}
  //           bottom={product.bottom}
  //         />
  //       )
  //     }
  //   })
  //   .slice(0, 10)
  // console.log(products)
  return (
    <ProductContainer
      style={{
        minHeight: '30vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>Will be available soon</div>
      {/* <div className="lg">
        <GridPart>{products}</GridPart>
        <SeeMore clink="/collection/handbags" />
      </div>
      <div className="md">
        <GridPart>{products.slice(0, 8)}</GridPart>
        <SeeMore clink="/collection/handbags" />
      </div>
      <div className="sm">
        <GridPart>{products.slice(0, 3)}</GridPart>
        <SeeMore clink="/collection/handbags" />
      </div> */}
    </ProductContainer>
  )
}

export default Footwear
