import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Context } from '../../context'
import { NavLink } from '../NavLink'
import useDropoff from '../../hooks/useDropOff'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import SearchBox from '../SearchBox'
import NavbarContainer from './NavbarContainer'
import router, { useRouter } from 'next/router'
import { productTypes } from 'data/types'

const Navbar = () => {
  const { burger, setBurger, allProducts } = useContext(Context)
  const [searchValue, setSearchValue] = useState('')
  const [searched, setSearched] = useState<productTypes[] | []>([])
  const [search, setSearch] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const searching = allProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchValue.toLowerCase())
    })
    setSearched(searching)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])
  const router = useRouter()

  const dropSearch = () => {
    setSearchValue('')
    setSearch(false)
  }
  const handleSearch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setSearch(!search)
    setTimeout(() => {
      if (searchInputRef && searchInputRef.current) {
        searchInputRef.current.focus()
      }
    }, 500)
  }
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  //   if (searched.length) {
  //     router.push(`/collection/${searched[0].id}`)
  //   } else if ('laptop'.includes(searchValue)) {
  //     router.push('/collection/laptop_bags')
  //   } else if (searchValue.includes('accessories')) {
  //     router.push('/collection/accessories')
  //   } else if (searchValue.includes('footwears')) {
  //     router.push('/collection/footwears')
  //   } else {
  //     router.push('/collection/all')
  //   }
   }
  const searchRef = useDropoff(dropSearch)

  const searchClass = search ? 'search-active' : 'search-inactive'
  const burgerClass = burger ? 'nav-active' : 'nav-inactive'
  return (
    <NavbarContainer>
      <nav className={`mobile-nav__container ${searchClass}`}>
        <div className={search ? 'none' : 'nav__logo'}>
          <Link href="/">
            <Image
              className="mobile mobile-nav__img"
              src="/assets/logo.png"
              height={27}
              width={41}
              sizes="(min-width: 1000px) 640px, (min-width: 640px) 50vw, 100vw"
              alt="logo"
            />

            <Image
              className="desktop img desktop-nav__img"
              src="/assets/logo.png"
              fill
              sizes="(min-width: 1000px) 640px, (min-width: 640px) 50vw, 100vw"
              alt="logo"
            />
          </Link>
        </div>

        <div className={`search_burg ${searchClass}`}>
          <div ref={searchRef}>
            {search && (
              <div>
                <form
                  className="search-container search-form"
                  onSubmit={(e) => handleSubmit(e)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <input
                      type="text"
                      className="search-bar"
                      placeholder="Search..."
                      ref={searchInputRef}
                      onChange={(e) => setSearchValue(e.target.value)}
                      data-testid="mysearch"
                      value={searchValue}
                    />
                    <IoMdClose
                      style={{ fontSize: '2rem', color: 'red' }}
                      onClick={() => setSearch(false)}
                      data-testid="cancel"
                    />
                  </div>
                  <SearchBox val={searchValue} func={setSearchValue} />
                </form>
              </div>
            )}

            <div
              onClick={handleSearch}
              className={search ? 'none' : ''}
              data-testid="open-mysearch"
            >
              <Image
                src="/assets/search.svg"
                className="search-img"
                width={18}
                height={18}
                sizes="(min-width: 1000px) 640px, (min-width: 640px) 50vw, 100vw"
                alt="search bar"
              />
            </div>
          </div>

          <div
            onClick={() => setBurger(!burger)}
            className={`burger ${burgerClass} ${search ? 'none' : ''}`}
            data-testid="open-menu"
          >
            <div className="burger-icon"></div>
          </div>
        </div>

        {/* Large-screens nav */}
        <div className="desktop">
          <form
            className="search-submit__container search-form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              className="desktop-search"
              placeholder={`Search for products & categories`}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button className="desktop-search__submit">
              <Image
                src="/assets/magnifying-glass.svg"
                className="searching"
                width={16}
                height={16}
                alt="search"
              />
            </button>
            <SearchBox val={searchValue} func={setSearchValue} />
          </form>
        </div>
        <div className="desktop desktop-nav__links">
          {/* <NavLink href="/" className="desktop-nav__link">
            Home
          </NavLink> */}
          <NavLink href="/collection/all" className="desktop-nav__link">
            Collection
          </NavLink>
          <NavLink href="/contact" className="desktop-nav__link">
            Contact Us
          </NavLink>
          <NavLink href="/#reviews" className="desktop-nav__link">
            Reviews
          </NavLink>
          {/* <NavLink href="/" className="desktop-nav__link">
            <FaRegHeart className="favorites" />
             <Image
              src="/assets/heart-regular.svg"
              width={20}
              height={20}
              alt="favorites"
            /> 
          </NavLink> */}
        </div>
      </nav>
      {burger && (
        <div className="nav-shadow" onClick={() => setBurger(false)}></div>
      )}
      <div
        className={`mobile-nav__links ${burgerClass}`}
        data-testid="mobile-nav-links"
      >
        <NavLink href="/" className="mobile-nav__link">
          Home
        </NavLink>
        <NavLink href="/collection/all" className="mobile-nav__link">
          Collection
        </NavLink>
        <NavLink href="/contact" className="mobile-nav__link">
          Contact Us
        </NavLink>
        <NavLink href="/#reviews" className="mobile-nav__link">
          Reviews
        </NavLink>
        {/* <NavLink href="/" className="mobile-nav__link">
          Favourite
        </NavLink> */}
      </div>
    </NavbarContainer>
  )
}

export default Navbar
