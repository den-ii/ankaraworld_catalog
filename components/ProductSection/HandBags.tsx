import { GridPart } from './GridPart'
import { SeeMore } from './SeeMore'
import { Product } from './Product'
import { ProductContainer } from './ProductContainer'
import { Context } from '../../context'
import { useContext } from 'react'

const HandBags = () => {
  const { allProducts } = useContext(Context)
  const products = allProducts
    .filter((product) => product.prod_section == 'hand_bags')
    .map((product) => (
      <Product
        key={product.id}
        id={product.id}
        name={product.prod_name}
        image={product.image}
        bottom={product.bottom}
      />
    ))
    .slice(0, 10)
  return (
    <ProductContainer style={{ minHeight: '30vh' }}>
      <div className="lg">
        <GridPart>{products.slice(0, 5)}</GridPart>
        <SeeMore clink="/collection/handbags" />
      </div>
      <div className="md">
        <GridPart>{products.slice(0, 8)}</GridPart>
        <SeeMore clink="/collection/handbags" />
      </div>
      <div className="sm">
        <GridPart>{products.slice(0, 3)}</GridPart>
        <SeeMore clink="/collection/handbags" />
      </div>
    </ProductContainer>
  )
}

export default HandBags
