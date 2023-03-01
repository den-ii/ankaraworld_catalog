import { useRouter } from 'next/router'
import Link from 'next/link'
import { NavLinkInterface } from './types'

export { NavLink }

function NavLink({
  href,
  exact,
  children,
  className,
  onClick,
  ...props
}: NavLinkInterface) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)
  // setInterval(() => console.log(pathname, href), 1000)

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
