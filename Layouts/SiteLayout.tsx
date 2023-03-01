import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { LayoutProps } from './types'

const SiteLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
export default SiteLayout
