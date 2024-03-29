import { GridPart } from './GridPart'
import { SeeMore } from './SeeMore'
import { Product } from './Product'
import { ProductContainer } from './ProductContainer'
import { Context } from '../../context'
import { useContext } from 'react'

const HandBags = () => {
  const { allProducts } = useContext(Context)
  const products = allProducts
    .filter((product) => product.category == 'hand bags')
    .map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        image={product.image}
        bottom={product.top_position}
      />
    ))
    .slice(0, 10)
  return (
    <ProductContainer style={{ minHeight: '30vh' }}>
      <div className="lg">
        <GridPart>{products.slice(0, 5)}</GridPart>
        <SeeMore clink="/collection/bags" />
      </div>
      <div className="md">
        <GridPart>{products.slice(0, 8)}</GridPart>
        <SeeMore clink="/collection/bags" />
      </div>
      <div className="sm">
        <GridPart>{products.slice(0, 3)}</GridPart>
        <SeeMore clink="/collection/bags" />
      </div>
    </ProductContainer>
  )
}

export default HandBags
