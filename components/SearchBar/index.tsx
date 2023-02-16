import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
  .img {
    object-fit: contain;
  }
`

const SearchBar = () => {
  return (
    <div>
      <Image
        src="/assets/search.svg"
        className="search-img"
        width={18}
        height={18}
        alt="search bar"
      />
    </div>
  )
}

export default SearchBar
