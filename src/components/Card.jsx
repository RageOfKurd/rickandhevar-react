import React from 'react'

const Card = ({image , name , species , status, location, origin}) => {
  return (
    <article  className="flex flex-col gap-4 bg-stone-50 hover:bg-stone-100 transition-all hover:cursor-pointer py-5 px-6 border max-w-[324px]">
    <figure>
        <img src={image} alt=""/>
    </figure>
    <div className="flex flex-col gap-2 ">
        <h1 className="text-stone-800 font-extrabold text-2xl truncate">{name}</h1>
        <div className="flex gap-2 items-center ">
                  <span className={ `inline-block w-5 h-5 ${status === 'Alive' ?  'bg-green-500' : 'bg-red-500'} rounded-full`}></span>
            <p className="text-stone-700 font-medium text-base">
                <span>{species}</span>-
               <span>{status}</span></p>
        </div>
        <div className="flex  justify-between  gap-5 mt-3">
        <div>
            <h4 className="text-stone-500 text-sm">last known location:</h4>
            <h2 className="text-stone-700 text-sm font-semibold ">{location.name}</h2>
        </div>
        <div>
            <h4 className="text-stone-500 text-sm">first location:</h4>
            <h2 className="text-stone-700 text-sm font-semibold ">{origin.name}</h2>
        </div>
        </div>

        
    </div>
 </article>
  )
}

export default Card