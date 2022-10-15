import React from 'react'
import InfoCard from '../components/InfoCard'
import Navbar from '../components/Navbar'

function Post() {
  return (
    <div dir='rtl'>
        <Navbar />
        <div className='p-4'>
            <InfoCard />
        </div>
    </div>
  )
}

export default Post