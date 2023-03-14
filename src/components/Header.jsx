import React from 'react'
import { useSelector } from 'react-redux'



const Header = () => {

    const theme = useSelector((state) => state.theme.theme)

  return (
    <header className={`${theme === 'dark' ? 'text-stone-100' : 'text-stone-800'} flex-1 text-4xl md:text-5xl font-extrabold text-center ` 
}>
           The Rick And Hevar
    </header>
  )
}

export default Header