import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

jest.mock('next/router', () => require('next-router-mock'))

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the links', () => {
    render(<Footer />)
    const homeLink = screen.getByText('Home')
    const collectionLink = screen.getByText('Collection')
    const aboutLink = screen.getByText('About')
    const contactLink = screen.getByText('Contact Us')

    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toBeInTheDocument()

    expect(collectionLink).toBeInTheDocument()
    expect(aboutLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it('renders the social media links', () => {
    render(<Footer />)
    const facebookLink = screen.getByAltText('facebook')
    const instagramLink = screen.getByAltText('instagram')
    const twitterLink = screen.getByAltText('twitter')

    expect(facebookLink).toBeInTheDocument()
    expect(instagramLink).toBeInTheDocument()
    expect(twitterLink).toBeInTheDocument()
  })

  it('renders the copyright message', () => {
    render(<Footer />)
    const copyrightMessage = screen.getByText(/Ankara World Empire/i)

    expect(copyrightMessage).toBeInTheDocument()
  })
})
