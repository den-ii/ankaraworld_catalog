import { useState, createContext, Dispatch, SetStateAction } from 'react'

interface ContextProps {
  burger: boolean
  setBurger: Dispatch<SetStateAction<boolean>>
}
interface MyContextProps {
  children: React.ReactNode
}
const ContextValues = {
  burger: false,
  setBurger: () => {},
}

const Context = createContext<ContextProps>(ContextValues)

const MyContext = ({ children }: MyContextProps) => {
  const [burger, setBurger] = useState(false)
  return (
    <Context.Provider value={{ burger, setBurger }}>
      {children}
    </Context.Provider>
  )
}

export { Context, MyContext }
