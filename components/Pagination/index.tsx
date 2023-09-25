import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const StyledPagination = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  li {
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;

    :hover {
      background-color: var(--secondary);
      color: white;
    }
  }
  .pag-active {
    background-color: var(--primary);
    color: white;
  }
`

interface PaginationProps {
  selectStart(num: number): void
  limit: number
  amount: number
  start: number
}

function Pagination({ selectStart, limit, amount, start }: PaginationProps) {
  const [totalPages, setTotalPages] = useState(0)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(10)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(1)

  const paginateNext = () => {
    selectStart(start + limit)
    // Show next set of pageNumbers
    // if (start + 1 > maxPageNumberLimit) {
    //   setMaxPageNumberLimit(maxPageNumberLimit + limit)
    //   setMinPageNumberLimit(minPageNumberLimit + limit)
    // }
  }

  const paginatePrev = () => {
    selectStart(start - limit)
    // Show prev set of pageNumbers
    // if ((currentPage - 1) % pageNumberLimit === 0) {
    //   setmaxPageNumberLimit(maxPageNumberLimit - limit)
    //   setminPageNumberLimit(minPageNumberLimit - limit)
    // }
  }
  const prev = start >= limit
  const next = start + limit < amount

  function handlePageChange(page: number) {
    selectStart(page * limit)
  }
  return (
    <StyledPagination>
      <nav>
        <ul className="">
          {prev && (
            <li onClick={paginatePrev} className="">
              {'<'} Prev
            </li>
          )}
          {new Array(Math.round(amount / 10)).fill(amount).map((x, index) => {
            if (true) {
              return (
                <li
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={
                    (start + limit) / limit === index + 1 ? 'pag-active' : ''
                  }
                >
                  {index + 1}
                </li>
              )
            }
          })}
          {next && (
            <li onClick={paginateNext} className="">
              Next {'>'}
            </li>
          )}
        </ul>
      </nav>
    </StyledPagination>
  )
}

export default Pagination
