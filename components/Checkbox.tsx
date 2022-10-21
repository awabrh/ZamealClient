import React from 'react'

interface CheckboxProps {
    text? : string
    onChange? : React.ChangeEventHandler<HTMLInputElement>
}

function Checkbox({text, onChange} : CheckboxProps) {
  return (
    <div className='flex items-center gap-3 py-3'>
        <input onChange={onChange} type='checkbox' className='bg-black text-primary rounded-md h-5 w-5 transition-all'/>
        <p className='font-light'>{text}</p>
    </div>
  )
}

export default Checkbox