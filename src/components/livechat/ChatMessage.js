import React from 'react'

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center shadow-sm '> 
        <div className='p-2 mr-1 flex gap-2 justify-between items-center'>
        <img
          className="h-7"
          src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
          alt="user-icon"
        />
        <span className='font-bold pt-1'>{name}</span>
        </div>
        <div className='ml-2'>
          
          <p className='font pl-2 ml-2'>{message}</p>
        </div>

    </div>
  )
}

export default ChatMessage