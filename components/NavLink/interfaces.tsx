import { Props } from 'next/script'

export default interface NavLinkInterface {
  href: string
  exact?: boolean
  className: string
  children?: React.ReactNode
}
