import styled from 'styled-components'

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
      bottom: -205px;
      left: 100px;
      font-size: 1.5rem;
    }
    .burger--container {
      height: 40px;
      width: 40px;
      border-radius: 20px;
      left: 100px;
    }
  }
`
export default CollectionNav
