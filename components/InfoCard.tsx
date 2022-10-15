import React from 'react'

function InfoCard() {
  return (
    <div className='relative flex border-primary gap-3 py-6 px-4 rounded-lg border-2 font-light'>
        <h3 className='absolute -top-4 right-8 bg-black px-3 font-bold text-lg'>
            معلومات السائق :
        </h3>
        <div id='labels' className='font-bold flex-col'>
            <p>الاسم</p>
            <p>السكن</p>
            <p>رقم الهاتف</p>
        </div>
        <div id='commas'>
            <p>:</p>
            <p>:</p>
            <p>:</p>
        </div>
        <div id='values'>
            <div>محمد وليد</div>
            <div>الرياض مربع 4</div>
            <div>0912345678</div>
        </div>
    </div>
  )
}

export default InfoCard