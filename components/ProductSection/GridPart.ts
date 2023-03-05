import styled from 'styled-components'

export const GridPart = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
  .lg, .md{
    display: none;
  }
  .product-img__container {
    height: 140px;
    position: relative;
    background-color: #ffffff;
    border-radius: var(--border-radius);
    text-align: center;
    transition: .5s transform;
  }
  .product-img__container:hover{
    transform: translateY(-10px);
  }
  .product-img {
    border-radius: 6px;
    object-fit: cover;
  }
  p {
    padding: 1rem 0;
  }
  @media screen and (min-width: 500px){
    .product-img__container {
      height: 160px;
    }
  }
  @media screen and (min-width: 700px){
    grid-template-columns: repeat(4, 1fr);
  .sm{
    display: none;
  }
  .md{
    display: block;
  }
    .product-img__container {
      height: 200px;
    }
  }
  @media screen and (min-width: 1100px){
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4rem;
    text-align: center;
  .md,.sm{
    display: none;
  }
  .lg{
    display: block;
  }
    .product-img__container {
      height: 220px;
      position: relative;
      background-color: #ffffff;
      border-radius: var(--border-radius);
      text-align: center;
    }
    p{
      padding: 1rem 0;
    }
    .product-img {
      border-radius: 6px;
      object-fit: cover;
    }
  } 
`
