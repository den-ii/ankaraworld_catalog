import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { LayoutProps } from './interfaces'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
