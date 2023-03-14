import styled from 'styled-components'

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
    transform: translateX(20%);
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
    font-size: 1.5rem !important;
    border: 1px solid var(--primary);
    border-radius: 6px;
  }
  .search-active {
    display: block;
  }
  .search-container {
    padding: 0.5rem 0;
  }
  .search-form {
    position: relative;
  }
  .desktop-nav__link.active {
    font-weight: 600;
  }
  .desktop {
    display: none;
  }
  .none {
    display: none;
  }
  .nav-shadow {
    position: fixed;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  @media screen and (min-width: 730px) {
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
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
      font-size: 1.8rem;
      gap: 2rem;
    }
    .desktop-nav__link:hover {
 
       color: var(--secondary); 
    }
    .desktop-search,
    .desktop-search__submit {
      height: 38px;
    }
    .desktop-search {
      padding: 1.1rem;
      width: 300px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border: 1px solid var(--primary);
      border-right: none;
      font-size: 1.4rem;
    }
    .desktop-search:focus {
      /* border: 2px solid var(--primary); */
      outline: none;
    }
    .desktop-search:focus .search-submit {
      /* border: 2px solid var(--primary); */
    }
    .search-submit__container {
      display: flex;
      align-items: center;
    }
    /* .desktop-search:focus {
      outline: none;
    } */
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
    .favorites:hover {
      color: var(--secondary);
    }
    .favorites {
      margin-top: 0.3rem;
    }
  }
  @media screen and (min-width: 930px) {
    .desktop-search {
      padding: 1.1rem;
      width: 500px;
    }
    .nav-shadow {
      display: none;
    }
  }
`

export default NavbarContainer
