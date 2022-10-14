import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'


function Hero() {
    const [searchInput, setSearchInput] = useState("")
    const handleSubmit = () => {}

  return (
    <div className='flex flex-col w-full justify-center items-center h-5/6' dir='rtl'>
        <div  className='flex flex-col w-full justify-center h-3/4 items-center'>
            <div className='flex flex-col items-center pb-10'>
                <h2 className='text-2xl'>عاوز ترحيل؟</h2>
                <h1 className='font-bold text-5xl'>ما تشيل هم!</h1>
            </div>
            <div className='w-full flex justify-center'>
                <form 
                    className='w-full flex flex-col items-center'
                    noValidate
                    onSubmit={handleSubmit} 
                >
                    <div className='w-full flex justify-center' dir='ltr'>
                        <FiSearch size={20} className='relative text-[#0004] top-2.5 left-7' />
                        <input 
                            name='search'
                            className='text-black w-5/6 sm:w-96 h-10 rounded-md text-sm px-5 transition-all'
                            placeholder='ساكن وين؟  جبل أولياء ، المهندسين ، الصافية ...'
                            type='text' 
                            onChange={(e) => setSearchInput(e.target.value)} 
                            value={searchInput}
                            dir="rtl"
                        />
                    </div>
                    
                    <button type='submit' className='bg-primary mt-3 rounded-md px-8 pb-2 text-lg hover:bg-purple-900 transition-all'>بحث</button>
                </form>
            </div>
            <p className='my-8 text-sm'>أو</p>
            <button className='border-primary bg-black border-2 px-5 pb-3 pt-2 rounded-md hover:bg-primary transition-all duration-300' >أضيف ترحيلك</button>
        </div>
    </div>
  )
}

export default Hero