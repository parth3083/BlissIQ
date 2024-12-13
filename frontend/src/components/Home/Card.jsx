import React from 'react'

function Card({ title,type}) {
  return (
    <div className="Card flex-shrink-0 w-64 mb-3 rounded-md shadow-lg shadow-zinc-500 border flex flex-col h-48 p-1">
    <div className="upper-part w-full h-[65%] bg-green-500 rounded-md"></div>
          <div className='text-sm bg-yellow-200 mt-2 w-fit rounded-full px-2'>{ type}</div>
          <h1 className='text-xl font-semibold mt-1 pl-2'>{ title}</h1>
</div>
  )
}

export default Card