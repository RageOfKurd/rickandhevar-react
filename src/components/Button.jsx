import React from 'react'

const Button = ({ text , handleClick }) => {
    

  return (
      <button  id="btn" onClick={handleClick} className="btn bg-neutral-800 hover:bg-neutral-600 transition px-6 py-3 rounded font-bold text-2xl text-stone-100">{ text}</button>
  )
}

export default Button