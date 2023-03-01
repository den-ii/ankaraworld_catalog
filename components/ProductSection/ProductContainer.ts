import styled from 'styled-components'

export const ProductContainer = styled.div`
.lg, .md{
    display: none;
  }
  .sm{
    display: block;
  }
 @media screen and (min-width: 700px){
  .sm{
    display: none;
  }
  .md{
    display: block;
  }}
 @media screen and (min-width: 1100px){
  .md,.sm{
    display: none;
  }
  .lg{
    display: block;
  }
}
`