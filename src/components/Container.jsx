import React from 'react'
import { useSelector } from 'react-redux'


const Container = ({ children }) => {
    const theme = useSelector((state) => state.theme.theme)

  return (
      <div className={`${theme === 'light' ? 'bg-white' : 'bg-stone-800'} py-20 font-sans flex flex-col gap-20 mx-auto `}>{ children}</div>
  )
}

export default Container