import React from 'react'

interface StepIndicatorProps {
    step : 1 | 2 | 3
}

function StepIndicator({step} : StepIndicatorProps) {

    var step2 : string = 'white'
    var step3 : string = 'white'

    switch (step) {
        case 1:
            step2 = "white"
            step3 = "white"
            break;
        case 2:
            step2 = "primary"
            step3 = "white"
            break
        case 3:
            step2 = "primary"
            step3 = "primary"
            break;
        default:
            break;
    }
    
  return (
    <div className='relative flex w-72 md:w-96 justify-between'>
        <div className={`absolute z-10 w-28 md:w-40 right-8 top-3.5 h-1 bg-${step2}`} ></div>

        <div className={`absolute z-10 w-28 md:w-40 left-8 top-3.5 h-1 bg-${step3}`}></div>

        <div className='flex flex-col items-center z-20'>
            <div className={`bg-primary h-6 w-6 rounded-full m-1`} />
            <p className='text-primary w-20 text-center font-thin'>معلوماتك الشخصية</p>
        </div>

        <div className='flex flex-col items-center z-20'>
            <div className={`bg-${step2} h-6 w-6 rounded-full m-1 transition-all duration-500`} />
            <p className={`text-${step2} w-20 text-center font-thin transition-all duration-500`}>معلومات المركبة</p>
        </div>

        <div className='flex flex-col items-center z-20'>
            <div className={`bg-${step3} h-6 w-6 rounded-full m-1 transition-all duration-500`} />
            <p className={`text-${step3} w-20 text-center font-thin transition-all duration-500`}>معلومات الترحيل</p>
        </div>
    </div>
  )
}

export default StepIndicator