import React from 'react'
import InfoCard from './InfoCard'
import carImage from "../assets/carImage.jpg"


function PostInfo() {
    const driverInfo = ['محمد وليد' , 'الرياض مربع 6' , '0912345678']
    const carInfo = ['كريتا 2017' , '4' , 'يعمل']
    const tarheelInfo = ['8:00 ص - 9:00م' , ' الأحد - الخميس' , 'الصحافة - جبرة - السجانة - ابوحمامة - جبل أولياء']
    const price = '40,000 جنيه / للراكب'
    const timeLapsed = 'قبل 3 أسابيع'

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-4 gap-10 md:items-center '>
        <div className='flex flex-col items-center w-full'>
            <img src={carImage.src} className="h-52 w-full object-cover rounded-lg md:w-96"/>
            <div className='w-full md:w-96 flex justify-between md:py-5'>
                <h4 className='font-bold'>{price}</h4>
                <h6 className='font-light'>{timeLapsed}</h6>
            </div>
        </div>
        <div className='flex flex-col gap-10'>
            <InfoCard type='driver' values={driverInfo} className='h-fit md:min-h-full'/>
            <InfoCard type='car' values={carInfo} className='justify-self-center'/>
            <InfoCard type='tarheel' values={tarheelInfo}/>
        </div>
    </div>
  )
}

export default PostInfo