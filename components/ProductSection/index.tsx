import { Dispatch, SetStateAction, useState } from 'react'
import styled from 'styled-components'
import AllProducts from './AllProducts'
import Accessories from './Accessories'
import HandBags from './HandBags'
import LaptopBags from './LaptopBags'
import Footwear from './Footwear'

const ProductSectionContainer = styled.section`
  background-color: var(--primary);
  color: white;

  .product-links {
    display: flex;
    font-size: 1.6rem;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
  .product-links p {
    cursor: pointer;
    opacity: 0.8;
  }
  .product-links .active {
    color: white;
    opacity: 1;
    font-weight: 700;
  }
  .accessories {
    display: none;
  }
  @media screen and (min-width: 700px) {
    min-height: 50vh;
    .product-links {
      font-size: 1.7rem;
      gap: 2rem;
      padding: 2.5rem 0;
    }
    .accessories {
      display: block;
    }
  }
`

const ProductSection = () => {
  const [allProducts, setAllProducts] = useState(true)
  const [handBags, setHandBags] = useState(false)
  const [laptopBags, setLaptopBags] = useState(false)
  const [footwear, setFootwear] = useState(false)
  const [accessories, setAccessories] = useState(false)

  const handleAll = (callback: Dispatch<SetStateAction<boolean>>) => {
    setAllProducts(false)
    setHandBags(false)
    setLaptopBags(false)
    setFootwear(false)
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
          className={`${handleClasses(footwear)} accessories`}
          onClick={() => handleAll(setFootwear)}
        >
          Footwears
        </p>
        <p
          className={`${handleClasses(accessories)} accessories`}
          onClick={() => handleAll(setAccessories)}
        >
          Accessories
        </p>
      </div>
      {allProducts && <AllProducts />}
      {handBags && <HandBags />}

      {laptopBags && <LaptopBags />}

      {footwear && <Footwear />}

      {accessories && <Accessories />}
    </ProductSectionContainer>
  )
}

export default ProductSection
