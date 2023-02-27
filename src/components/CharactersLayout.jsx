import React from 'react'

const CharactersLayout = ({children}) => {
  return (
      <div className='flex justify-center flex-col  md:flex-row md:flex-wrap items-center gap-8'>{children}</div>
  )
}

export default CharactersLayout