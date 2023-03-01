export type NavLinkInterface = {
  href: string
  exact?: boolean
  className: string
  children?: React.ReactNode | any
  onClick?: () => void
}
