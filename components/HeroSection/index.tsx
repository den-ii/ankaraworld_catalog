import styled from 'styled-components'

const HeroSectionContainer = styled.section`
  color: var(--primary);
  text-align: center;
  .highlight {
    color: var(--secondary);
  }
  .buttons button {
    padding: 0.7rem 2rem;
    font-size: 1.25rem;
    margin-top: 3rem;
    margin-bottom: 9rem;
  }
  .buttons .talk {
    border: 1px solid var(--secondary);
  }
  .buttons .talk:hover {
    background-color: var(--secondary);
    color: white;
  }
`

const HeroSection = () => {
  return (
    <HeroSectionContainer className="hero">
      <div className="hero-img"></div>
      <div className="hero-text">
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
          <span className="highlight">
            <b> handcrafted Ankara </b>
          </span>
          Products.
        </p>
      </div>
      <div className="buttons">
        <button className="talk">Let&apos;s talk</button>
      </div>
    </HeroSectionContainer>
  )
}

export default HeroSection
