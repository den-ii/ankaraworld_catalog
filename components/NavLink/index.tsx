import { useRouter } from 'next/router'
import Link from 'next/link'
import NavLinkInterface from './interfaces'

export { NavLink }

function NavLink({
  href,
  exact,
  children,
  className,
  ...props
}: NavLinkInterface) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  if (isActive) {
    className += ' active'
  }

  return (
    <Link href={href}>
      <p className={className} {...props}>
        {children}
      </p>
    </Link>
  )
}
