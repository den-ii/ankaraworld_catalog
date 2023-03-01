import { GridPart } from './GridPart'
import { SeeMore } from './SeeMore'
import { Product } from './Product'
import { ProductContainer } from './ProductContainer'

const Accessories = () => {
  //   const products = accessories
  //     .map((product) => {
  //       return (
  //         <Product
  //           key={product?.id}
  //           id={product?.id}
  //           name={product?.prod_name}
  //           image={product?.image}
  //         />
  //       )
  //     })
  //  .slice(0, 10)
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
    </ProductContainer>
  )
}

export default Accessories
