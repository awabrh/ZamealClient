import React from 'react'
import carImage from "../assets/carImage.jpg"

function SearchItem() {
  return (
    <div className=' flex flex-col justify-center items-center justify-self-center w-full'>
      <img src={carImage.src} className="h-52 w-full object-cover rounded-lg"/>
      <div className='w-full flex justify-between pt-3'>
        <h4 className='font-bold'>40,000 جنيه / للراكب</h4>
        <h6 className='font-light'>قبل 3 أسابيع</h6>
      </div>
      <div className='w-full font-light text-sm'>
        <p>محمد وليد - هندسة ميكانيكية 017</p>
        <p>الصحافة - جبرة - السجانة - ابوحمامة - جبل أولياء</p>
      </div>
    </div>
  )
}

export default SearchItem