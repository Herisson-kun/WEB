import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public" alt="user avatar" />
            </div>
        </div>
        <div className='chat-bubble text-white bg-lime-900'>
        Hi! How can I help you today? Hi! How can I help you today? Hi! How can I help you today?
 Hi! How can I help you today? Hi! How can I help you today? Hi! How can I help you today?

        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:48</div>
    </div>
  )
}

export default Message