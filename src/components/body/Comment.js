import React from 'react'

function Comment({data}) {
    const {name, text} = data
  return (
    <div className='flex bg-gray-100 my-2'>
        <img className='w-10 h-10 mt-1' src="https://cdn-icons-png.flaticon.com/128/64/64572.png" alt="" />
        <div className='px-3'>
            <p>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment