import React from 'react'

interface InfoCardProps {
    type? : 'driver' | 'car' | 'tarheel'
    values :string[] 
    className ? : string
}


function InfoCard({type, values, className} : InfoCardProps) {
    var labels : JSX.Element
    var title : string
    if(type === 'driver') {
        title = 'معلومات السائق :'
        labels = 
        <>
            <p>اسم السائق</p>
            <p>السكن</p>
            <p>رقم الهاتف</p>
        </>
    } else if(type === 'car') {
        title = 'معلومات المركبة :'
        labels = 
        <>
            <p>الموديل</p>
            <p>عدد المقاعد</p>
            <p>التكييف</p>
        </>
    } else {
        title = 'معلومات الترحيل :'
        labels = 
        <>
            <p>المواعيد</p>
            <p>الأيام</p>
            <p>المناطق</p>
        </>
    }

    

    


  return (
    <div className={className}>
        <div className='relative flex  border-primary gap-3 py-6 px-4 rounded-lg border-2 font-light w-full md:w-96'>
            <h3 className='absolute -top-4 right-8 bg-black px-3 font-bold text-lg'>
                {title}
            </h3>
            <div id='labels' className='font-bold flex-col '>
                {labels}   
            </div>
            <div id='commas'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
            </div>
            <div id='values'>
                <div>{values[0]}</div>
                <div>{values[1]}</div>
                <div>{values[2]}</div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard