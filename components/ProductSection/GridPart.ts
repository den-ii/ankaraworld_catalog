import styled from 'styled-components'

export const GridPart = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem;

  div{
    width: 100px;
    background-color: white;
    border-radius: var(--border-radius);
    text-align: center;
  }
  .product-img__container{
    width: 100px;
    height: 90px;
    position: relative;
    background-color: white;
    border-radius: var(--border-radius);
    text-align: center;
  }
  .product-img{
    border-radius: 11px;
    object-fit: cover;
  }
`
