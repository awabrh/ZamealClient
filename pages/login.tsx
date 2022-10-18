import React from 'react'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'

function login() {
  return (
    <div dir='rtl'>
        <Navbar />
        <div className='flex flex-col h-[32rem] items-center justify-center'>
            <LoginForm />
        </div>  
    </div>
  )
}

export default login