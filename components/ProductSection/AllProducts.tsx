import { GridPart } from './GridPart'
import { home } from '../../data/home'
import { SeeMore } from './SeeMore'
import { Product } from './Product'
import { ProductContainer } from './ProductContainer'

const AllProducts = () => {
  const products = home
    .map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.prod_name}
          image={product.image}
          bottom={product.bottom}
        />
      )
    })
    .slice(0, 5)
  return (
    <ProductContainer>
      <div className="lg">
        <GridPart>{products}</GridPart>
        <SeeMore clink="/collection/all" />
      </div>
      <div className="md">
        <GridPart>{products.slice(0, 4)}</GridPart>
        <SeeMore clink="/collection/all" />
      </div>
      <div className="sm">
        <GridPart>{products.slice(0, 3)}</GridPart>
        <SeeMore clink="/collection/all" />
      </div>
    </ProductContainer>
  )
}

export default AllProducts
