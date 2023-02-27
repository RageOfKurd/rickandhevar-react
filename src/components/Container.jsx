import React from 'react'

const Container = ({children}) => {
  return (
      <div className=" py-20 font-sans flex flex-col gap-20 mx-auto ">{ children}</div>
  )
}

export default Container