import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import AllProducts from './AllProducts'

const ProductSectionContainer = styled.section`
  background-color: var(--primary);
  height: 50vh;
  color: white;
  .product-links {
    display: flex;
    justify-content: space-between;
  }
  .product-links p {
    cursor: pointer;
  }
  .product-links .active {
    color: var(--secondary);
    font-weight: 800;
  }
`

const ProductSection = () => {
  const [allProducts, setAllProducts] = useState(true)
  const [handBags, setHandBags] = useState(false)
  const [laptopBags, setLaptopBags] = useState(false)
  const [accessories, setAccessories] = useState(false)

  const handleAll = (callback: Dispatch<SetStateAction<boolean>>) => {
    setAllProducts(false)
    setHandBags(false)
    setLaptopBags(false)
    setAccessories(false)
    callback(true)
    console.log(handBags)
  }
  const handleClasses = (name: boolean) => {
    if (name) return 'active'
    else return 'inactive'
  }

  return (
    <ProductSectionContainer>
      <div className="product-links">
        <p
          className={handleClasses(allProducts)}
          onClick={() => handleAll(setAllProducts)}
        >
          All Products
        </p>
        <p
          className={handleClasses(handBags)}
          onClick={() => handleAll(setHandBags)}
        >
          Hand Bags
        </p>
        <p
          className={handleClasses(laptopBags)}
          onClick={() => handleAll(setLaptopBags)}
        >
          Laptop Bags
        </p>
        <p
          className={handleClasses(accessories)}
          onClick={() => handleAll(setAccessories)}
        >
          Accessories
        </p>
      </div>
      <AllProducts />
    </ProductSectionContainer>
  )
}

export default ProductSection
