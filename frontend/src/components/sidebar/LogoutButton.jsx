import React from 'react'
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className='mt-auto flex flex-row'>
        <BiLogOut className='w-6 h-6 text-white cursor-pointer mt-3' />
    </div>
  )
}

export default LogoutButton