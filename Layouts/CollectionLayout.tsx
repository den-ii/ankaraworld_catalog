import { NavLink } from '@/components/NavLink'
import { LayoutProps } from './types'
import styled from 'styled-components'
import { BsThreeDots } from 'react-icons/bs'
import { IoCheckmarkDone } from 'react-icons/io5'
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import { Context } from '../context'
import useDropoff from '../hooks/useDropOff'

const CollectionNav = styled.main`
  /* display: flex;
  align: center;
  justify-content: center; */
  position: relative;
  // margin-top: 7rem;
  h2 {
    text-align: center;
  }
  .burger {
    font-size: 2.2rem;
  }
  .burger--container {
    height: 30px;
    width: 30px;
    display: flex;
    border: 1px dashed var(--primary);
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    left: 80px;
    cursor: pointer;
  }
  margin-bottom: 3rem;
  .collection-nav__container {
    z-index: 2;
    background: white;
    bottom: -185px;
    position: absolute;
    left: 80px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    // width: 300px;
    box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 8px;
    justify-content: center;
    border-radius: 6px;
  }
  .check {
    font-size: 1.8rem;
  }

  .setnav {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding: 0.8rem;
    border-bottom: 0.1px solid grey;
  }
  .setnav .check-container {
    display: none;
  }
  .setnav:hover {
    background-color: rgba(150, 170, 223, 0.1);
  }
  .active .check-container {
    display: block;
  }
  @media screen and (min-width: 700px) {
    font-size: 1.7rem;

    .setnav {
      width: 300px;
      height: auto;
    }
    .check {
      font-size: 2.5rem;
    }
    .collection-nav__container {
      bottom: -215px;
      left: 100px;
    }
    .burger--container {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      left: 100px;
    }
  }
`

const CollectionLayout = ({ children }: LayoutProps) => {
  const { nav, setNav, setBurger } = useContext(Context)

  useEffect(() => {
    setBurger(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDropOff = () => {
    setNav(false)
  }
  const collectionNavRef = useDropoff(handleDropOff)
  const { pathname } = useRouter()
  return (
    <>
      <CollectionNav ref={collectionNavRef}>
        {nav && (
          <div className="collection-nav__container" data-testid="sav">
            <div>
              <NavLink href="/collection/all" className="setnav">
                <div data-testid="collection-nav">All</div>{' '}
                <div className="check-container">
                  <IoCheckmarkDone className="check" />
                </div>
              </NavLink>
              <NavLink href="/collection/bags" className="setnav">
                <div>Hand Bags</div>{' '}
                <div className="check-container">
                  <IoCheckmarkDone className="check" />
                </div>
              </NavLink>
              <NavLink href="/collection/laptop_bags" className="setnav">
                <div>Laptop Bags</div>{' '}
                <div className="check-container">
                  <IoCheckmarkDone className="check" />
                </div>
              </NavLink>
              <NavLink href="/collection/footwears" className="setnav">
                <div>Footwears</div>{' '}
                <div className="check-container">
                  <IoCheckmarkDone className="check" />
                </div>
              </NavLink>
              <NavLink href="/collection/backpack" className="setnav">
                <div>Backpacks</div>{' '}
                <div className="check-container">
                  <IoCheckmarkDone className="check" />
                </div>
              </NavLink>
            </div>
          </div>
        )}

        <div
          className="burger--container"
          onClick={() => setNav(!nav)}
          aria-label="collection navigation"
          data-testid="collection-nav__burger"
        >
          <BsThreeDots className="burger" />
        </div>
        <div onClick={() => setNav(false)}>
          {pathname == '/collection/all' && <h2>All Products</h2>}
          {pathname == '/collection/bags' && <h2>Hand Bags</h2>}
          {pathname == '/collection/laptop_bags' && <h2>Laptop Bags</h2>}
          {pathname == '/collection/backpack' && <h2>BackPacks </h2>}
          {pathname == '/collection/footwear' && <h2>Footwears </h2>}
          {pathname == '/collection/accessories' && <h2>Accessories </h2>}
        </div>
      </CollectionNav>
      {children}
    </>
  )
}
export default CollectionLayout
