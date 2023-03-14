import React from 'react'

const Button = ({ text , handleClick }) => {
    

  return (
      <button  id="btn" onClick={handleClick} className={`btn ${text=== 'LogIn' ? 'bg-neutral-800  hover:bg-neutral-700'  : 'bg-red-500 hover:bg-red-400'} hover:bg-neutral-600 transition px-6 py-3 rounded font-bold text-xl text-stone-100`}>{ text}</button>
  )
}

export default Button