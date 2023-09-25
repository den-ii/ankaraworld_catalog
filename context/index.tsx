import axios from 'axios'
import { productTypes } from 'data/types'
import { collection, getDocs } from 'firebase/firestore'
import { db, storage } from '../firebase/config'
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
  const [allProducts, setAllProducts] = useState<any | []>([])
  const productsCollectionRef = collection(db, 'products')
  
  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef)
    setAllProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
