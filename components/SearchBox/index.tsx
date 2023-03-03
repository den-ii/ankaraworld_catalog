import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Context } from '../../context'

const SearchProductContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid grey;
  .search_pr_lg {
    display: none;
  }
  @media screen and (min-width: 730px) {
    .search_pr_sm {
      display: none;
    }
    .search_pr_lg {
      display: block;
    }
  }
`
const SearchBoxContainer = styled.div`
  position: absolute;
  background-color: white;
  padding: 1rem;
  width: 100%;
  top: 45px;
  right: 0;
  left: 0;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  @media screen and (min-width: 730px) {
    top: 40px;
  }
`

const SearchBox = ({ val, func }: any) => {
  const { allProducts } = useContext(Context)
  const sections = [
    { id: 'laptop_bags', name: 'Laptop Bags' },
    { id: 'bags', name: 'Hand Bags' },
    { id: 'accessories', name: 'Accessories' },
  ]

  const router = useRouter()

  const handleClick = (id: string) => {
    router.push(`/collection/${id}`)
    func('')
  }

  //   const searchedValue = val
  const searchedFilteredProducts = allProducts
    .filter((products) => {
      return (
        products.prod_name.toLowerCase().includes(val.toLowerCase()) &&
        val.length > 1
      )
    })
    .slice(0, 3)
  const searchedFilteredSections = sections.filter(
    (section) =>
      section.name.toLowerCase().includes(val.toLowerCase()) && val.length > 1,
  )

  const searchedSections = searchedFilteredSections.map((section) => (
    <SearchProductContainer
      key={section.id}
      onClick={() => handleClick(section.id)}
    >
      <div>{section.name}</div>
    </SearchProductContainer>
  ))
  const searchedProducts = searchedFilteredProducts.map((products) => {
    return (
      <SearchProductContainer
        key={products.id}
        onClick={() => handleClick(products.id)}
      >
        <div>
          <Image
            src={products.image}
            width={80}
            height={80}
            className="img search_pr_lg"
            alt="product image"
          />
          <Image
            src={products.image}
            width={40}
            height={40}
            className="img search_pr_sm"
            alt="product image"
          />
        </div>
        <div>{products.prod_name}</div>
      </SearchProductContainer>
    )
  })
  const length = searchedProducts.length >= 1 || searchedSections.length >= 1

  return (
    <>
      {length && (
        <SearchBoxContainer data-testid="search-box">
          <div>{searchedSections}</div>
          <div>{searchedProducts}</div>
        </SearchBoxContainer>
      )}
    </>
  )
}

export default SearchBox
