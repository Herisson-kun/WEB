import React from 'react'
import useConversation from '../../zustand/useConversation.js'

const Conversation = ({conversation, emoji, lastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
  return (
    <> 
    <div className={`flex gap-2 items-center hover:bg-lime-700 rounded p-2 py-1 cursor-pointer
    ${isSelected ? 'bg-lime-800' : ""} `}
    onClick={() => setSelectedConversation(conversation)}
    >
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePicture} alt="user avatar" />

            </div>
        </div>
        <div className='flex flex-col flex-1 m-2'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
    </div>
    {lastIdx ? null : <div className='divider my-0 py-0 h-1'></div>}
    </>
    
  )
}

export default Conversation

/*

import React from 'react'

const Conversation = () => {
  return (
    <> 
    <div className='flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src="https://avatar.iran.liara.run/public" alt="user avatar" />

            </div>
        </div>
        <div className='flex flex-col flex-1 m-2'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>John Doe</p>
                <span className='text-xl'>😀</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'>

    </div>
    </>
    
  )
}

export default Conversation
    
    */
