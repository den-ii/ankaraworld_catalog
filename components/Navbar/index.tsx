import { useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Context } from 'context'
import { NavLink } from '../NavLink'
import SearchBar from '../SearchBar'
import useDropoff from 'hooks/useDropOff'
import { FaRegHeart } from 'react-icons/fa'

const NavbarContainer = styled.header`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  box-shadow: 0 2px 2px -2px rgba(12, 10, 84, 0.3);
  box-shadow: 0 2px 5px 0 rgba(12, 10, 84, 0.16);

  .mobile-nav__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .burger {
    /* width: 36px; */
    height: 44px;
    cursor: pointer;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* text-align: center; */
    z-index: 100;
  }
  .burger-icon {
    width: 25px;
    height: 4px;
    border-radius: 8px;
    background: var(--primary);
    transition: 0.2s;
  }
  .burger-icon::before,
  .burger-icon::after {
    position: absolute;
    content: '';
    width: 25px;
    height: 4px;
    background: var(--primary);
    border-radius: 10px;
  }
  .burger-icon::before {
    transform: translateY(-8px);
  }
  .burger-icon::after {
    transform: translateY(8px);
  }
  .nav-active .burger-icon {
    transform: rotate(0.625turn);
    background-color: var(--secondary);
  }
  .nav-active .burger-icon::before {
    transform: rotate(90deg) translateX(0px);
    background-color: var(--secondary);
  }
  .nav-active .burger-icon::after {
    opacity: 0;
  }
  .mobile-nav__links {
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index: 99;
    //justify-content: center;
    padding: 6rem 0 0 4rem;
    transition: 0.2s;
    /* align-items: center; */
  }
  .mobile-nav__links.nav-inactive {
    transform: translateX(100%);
  }
  .mobile-nav__links.nav-active {
    transform: translateX(10%);
  }
  .mobile-nav__link {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--primary);
  }
  .mobile-nav__link:hover {
    color: var(--secondary);
  }
  .search_burg {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .search-img {
    object-fit: contain;
    margin-top: 0.5rem;
  }
  .search-bar {
    display: block;
    width: 100%;
    padding: 0.8rem;
    font-size: 1.1rem !important;
    border: 1px solid var(--primary);
    border-radius: 6px;
  }
  .search-active {
    display: block;
  }
  .search-container {
    padding: 0.5rem 0;
  }
  .desktop {
    display: none;
  }
  @media screen and (min-width: 600px) {
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
    .nav__logo {
      position: relative;
      width: 57px;
      height: 33px;
    }
    .search_burg {
      display: none;
    }
    .desktop-nav__links {
      display: flex;
      gap: 2rem;
    }
    .desktop-nav__link:hover {
      /* opacity: 0.6; */
      color: var(--secondary);
      font-weight: 600;
    }
    .desktop-search,
    .desktop-search__submit {
      height: 30px;
    }
    .desktop-search {
      padding: 1rem;
      width: 300px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border: 1px solid var(--primary);
      border-right: none;
    }
    .search-submit__container {
      display: flex;
      align-items: center;
    }
    .desktop-search:focus {
      outline: none;
    }
    .desktop-search__submit {
      display: flex;
      align-items: center;
      border-radius: 0px;
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
      border: none;
      padding: 0 1rem;
      background-color: var(--primary);
      color: white;
    }
    .desktop-search__submit:hover {
      background-color: var(--secondary);
    }
    .favorites {
      margin-top: 0.3rem;
    }
  }
`

const Navbar = () => {
  const { burger, setBurger } = useContext(Context)
  const [search, setSearch] = useState(false)
  console.log(search)

  const dropSearch = () => {
    setSearch(false)
  }
  const handleSearch = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setSearch(!search)
  }
  const searchRef = useDropoff(dropSearch)

  const searchClass = search ? 'search-active' : 'search-inactive'
  const burgerClass = burger ? 'nav-active' : 'nav-inactive'
  return (
    <NavbarContainer>
      <nav className={`mobile-nav__container ${searchClass}`}>
        {!search && (
          <div className="nav__logo">
            <Image
              className="mobile mobile-nav__img"
              src="/assets/logo.png"
              height={27}
              width={41}
              alt="logo"
            />
            <Image
              className="desktop img desktop-nav__img"
              src="/assets/logo.png"
              fill
              alt="logo"
            />
          </div>
        )}
        <div className={`search_burg ${searchClass}`}>
          <div>
            {search && (
              <div ref={searchRef}>
                <form className="search-container">
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                  />
                </form>
              </div>
            )}
            {!search && (
              <div onClick={handleSearch}>
                <Image
                  src="/assets/search.svg"
                  className="search-img"
                  width={18}
                  height={18}
                  alt="search bar"
                />
              </div>
            )}
          </div>
          {!search && (
            <div
              onClick={() => setBurger(!burger)}
              className={`burger ${burgerClass}`}
            >
              <div className="burger-icon"></div>
            </div>
          )}
        </div>

        {/* Large-screens nav */}
        <div className="desktop">
          <form className="search-submit__container">
            <input
              type="text"
              className="desktop-search"
              placeholder={`Search for products & categories`}
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
          </form>
        </div>
        <div className="desktop desktop-nav__links">
          <NavLink href="/" className="desktop-nav__link">
            Home
          </NavLink>
          <NavLink href="/" className="desktop-nav__link">
            Collection
          </NavLink>
          <NavLink href="/" className="desktop-nav__link">
            Contact Us
          </NavLink>
          <NavLink href="/" className="desktop-nav__link">
            Reviews
          </NavLink>
          <NavLink href="/" className="desktop-nav__link">
            <FaRegHeart className="favorites" />
            {/* <Image
              src="/assets/heart-regular.svg"
              width={20}
              height={20}
              alt="favorites"
            /> */}
          </NavLink>
        </div>
      </nav>
      <div className={`mobile-nav__links ${burgerClass}`}>
        <NavLink href="/" className="mobile-nav__link">
          Home
        </NavLink>
        <NavLink href="/" className="mobile-nav__link">
          Collection
        </NavLink>
        <NavLink href="/" className="mobile-nav__link">
          Contact Us
        </NavLink>
        <NavLink href="/" className="mobile-nav__link">
          Reviews
        </NavLink>
        <NavLink href="/" className="mobile-nav__link">
          Favourite
        </NavLink>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
