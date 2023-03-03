import Link from 'next/link'
import styled from 'styled-components'

export const SeeMoreContainer = styled.div`
  padding: 5rem 0 6rem;
  text-align: center;
  a {
    color: black;
    padding: 1rem 1.5rem;
    font-weight: 600;
    border-radius: 6px;
    background-color: white;
    /* border: 1px solid var(--secondary); */
  }
  a:hover {
    color: white;
    background-color: var(--primary);
    border: 1px solid white;
  }
`
export const SeeMore = ({ clink }: any) => {
  return (
    <SeeMoreContainer>
      <Link href={clink}>See More</Link>
    </SeeMoreContainer>
  )
}
