import { NavLink } from '../components/NavLink'
import { LayoutProps } from './types'
import { BsThreeDots } from 'react-icons/bs'
import { IoCheckmarkDone } from 'react-icons/io5'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../context'
import useDropoff from '../hooks/useDropOff'
import CollectionLayoutContainer from './CollectionNav'

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
      <CollectionLayoutContainer ref={collectionNavRef}>
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
              <NavLink href="/collection/footwear" className="setnav">
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
      </CollectionLayoutContainer>
      {children}
    </>
  )
}
export default CollectionLayout
