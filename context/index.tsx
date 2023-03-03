import axios from 'axios'
import { productTypes } from 'data/types'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

interface ContextProps {
  burger: boolean
  setBurger: Dispatch<SetStateAction<boolean>>
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  allProducts: productTypes[]
  nav: boolean
  setNav: Dispatch<SetStateAction<boolean>>
}

interface MyContextProps {
  children: React.ReactNode
}

const initialContextValues: ContextProps = {
  burger: false,
  setBurger: () => {},
  searchValue: '',
  setSearchValue: () => {},
  allProducts: [],
  nav: false,
  setNav: () => {},
}

const Context = createContext<ContextProps>(initialContextValues)

const MyContext = ({ children }: MyContextProps) => {
  const [burger, setBurger] = useState<boolean>(false)
  const [nav, setNav] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [allProducts, setAllProducts] = useState<productTypes[]>([])

  useEffect(() => {
    req()
  }, [])

  const req = async () => {
    const response = await axios.get<productTypes[]>(
      'http://localhost:3000/products.json',
    )
    console.log(response.data)
    setAllProducts(response.data)
  }

  const contextValues: ContextProps = {
    burger,
    setBurger,
    searchValue,
    setSearchValue,
    allProducts,
    nav,
    setNav,
  }

  return <Context.Provider value={contextValues}>{children}</Context.Provider>
}

export { Context, MyContext }
