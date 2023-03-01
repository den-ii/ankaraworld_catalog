import Link from 'next/link'
import styled from 'styled-components'
import { HeroCarousel } from '../HeroCarousel'

const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;
  align-items: center;
  color: var(--primary);
  max-width: 1200px;
  margin: 2rem auto 3rem;
  .hero-img {
    width: 100%;
    align-self: flex-start;
    margin-top: -6rem;
  }
  @media screen and (min-width: 700px) {
    max-width: 1200px;
    margin: 2rem auto 3rem;
    flex-direction: row-reverse;
    gap: 1rem;
    margin-bottom: 2rem;
    .hero-img {
      margin-top: 0rem;
      margin-left: auto;
    }
  }
  @media screen and (min-width: 1024px) {
    .hero-img {
      width: 50%;
    }
  }

  .highlight {
    color: var(--secondary);
  }
  .highlight-b {
    font-weight: 700;
  }
  .buttons button {
    padding: 0.7rem 2rem;
    /* font-size: 1.25rem; */
    margin-right: 1.5rem;
    margin-top: 3rem;
    margin-bottom: 9rem;
    font-size: 1.5rem;
  }
  .buttons .talk {
    font-weight: 500;
    border: 1px solid var(--secondary);
  }
  .buttons .talk:hover {
    background-color: var(--secondary);
    color: white;
  }
  .view {
    background-color: var(--primary);
    color: white;
    border: none;
    font-weight: 500;
    border: 1px solid var(--primary);
  }
  .view:hover {
    color: var(--primary);
    background-color: white;
  }
`

const HeroSection = () => {
  return (
    <HeroSectionContainer className="hero">
      <div className="hero-img">
        <HeroCarousel />
      </div>
      <div className="hero-text" data-testid="ankara-world">
        <h1>
          Unbeatable Deals on Top-Quality{' '}
          <span className="highlight">
            Handcrafted
            <br /> Ankara
          </span>{' '}
          Products.
        </h1>
        <p>
          Begin your journey into the Afrocentric world by purchasing our
          <span className="highlight-b">
            <b> handcrafted Ankara </b>
          </span>
          Products.
        </p>
        <div className="buttons">
          <button className="view">
            <a
              href="https://ankaraworld447.bumpa.shop"
              target="_blank"
              rel="noreferrer"
            >
              View Store
            </a>
          </button>
          <button className="talk">
            <Link href="/contact">Let&apos;s talk</Link>
          </button>
        </div>
      </div>
    </HeroSectionContainer>
  )
}

export default HeroSection
