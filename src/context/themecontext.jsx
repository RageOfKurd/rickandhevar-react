import React from 'react'
import { createContext , useState  } from 'react'

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
    
const [theme , setTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{theme , setTheme}}>
          {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider