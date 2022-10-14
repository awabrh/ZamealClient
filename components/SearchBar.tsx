import React from 'react'
import { FiSearch } from 'react-icons/fi'
import search from '../pages/search'

interface searchProps {
    onChange? : React.ChangeEventHandler<HTMLInputElement> | undefined;
    value? : string | undefined
}

function SearchBar({onChange, value} : searchProps) {
  return (
    <div className='w-full flex justify-center' dir='ltr'>
                        <FiSearch size={20} className='relative text-[#0004] top-2.5 left-7' />
                        <input 
                            name='search'
                            className='text-black w-5/6 sm:w-96 h-10 rounded-md text-sm px-5 transition-all'
                            placeholder='ساكن وين؟  جبل أولياء ، المهندسين ، الصافية ...'
                            type='text' 
                            onChange={onChange} 
                            value={value}
                            dir="rtl"
                        />
                    </div>
  )
}

export default SearchBar