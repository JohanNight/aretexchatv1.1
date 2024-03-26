import React from 'react'

const ChatBody = ({message}) => {
  return (
    <div className='w-full h-56 overflow-y-hidden py-1'>
      <div className='chat chat-start'>
        <div className='text-white text-sm chat-bubble bg-[#f28f33]'>
          {message}
        </div>
      </div>
      <div className='chat chat-end'>
        <div className='text-white text-sm chat-bubble chat-bubble-info'>
           {"I'm fine thank you"}
        </div>
      </div>
    </div>
  )
}

export default ChatBody
