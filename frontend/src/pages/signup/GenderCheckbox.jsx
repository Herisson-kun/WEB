import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex justify-center'>
        <div className='form-control mr-4'>
            <label className='cursor-pointer label gap-3'>
                <span className='label-text'>Male</span>
                <input type="radio" name="gender" value="male" className='radio'/>
            </label>
        </div>
        <div className='form-control'>
            <label className='cursor-pointer label gap-3'>
                <span className='label-text'>Female</span>
                <input type="radio" name="gender" value="female" className='radio'/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox;