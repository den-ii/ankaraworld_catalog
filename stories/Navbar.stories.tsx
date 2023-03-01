import Navbar from '../components/Navbar'
import { NavLink } from '../components/NavLink'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Components/Navbar',
  component: Navbar,
}

export const NavBar = () => <NavLink href={''} className={''}><Navbar /></NavLink>
