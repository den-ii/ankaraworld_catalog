import { fireEvent, render, screen } from '@testing-library/react'
import { MyContext } from '../../../context'
import ProductSection from './../index'

jest.mock('next/router', () => require('next-router-mock'))

describe('Product Section', () => {
  test('renders Handbags when clicked', async () => {
    render(
      <MyContext>
        <ProductSection />
      </MyContext>,
    )
    const HandBags = screen.getByText(/Hand Bags/i)
    fireEvent.click(HandBags)
    const AllHandBags = await screen.findAllByText(/Onape Bag/i)
    expect(AllHandBags[0]).toBeInTheDocument()
  })
  test('renders Laptop Bags when clicked', async () => {
    render(
      <MyContext>
        <ProductSection />
      </MyContext>,
    )
    const LaptopBag = screen.getByText(/Laptop Bags/i)
    fireEvent.click(LaptopBag)
    const AllLaptopBags = await screen.findAllByText(/Atolani Laptop Bag/i)
    expect(AllLaptopBags[0]).toBeInTheDocument()
  })
})
