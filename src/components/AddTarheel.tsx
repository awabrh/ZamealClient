import React, { useState } from 'react'
import Button from './Button';
import Checkbox from './Checkbox';
import Select from './Select'
import StepIndicator from './StepIndicator'
import TextField from './TextField'

type visisbility = 'hidden' | ''

interface StepsVisibility {
    step1: visisbility
    step2: visisbility
    step3: visisbility
}

function AddTarheel() {
    const [step , setStep] = useState<1|2|3>(1)

    const [steps, setSteps] = useState<StepsVisibility>({
        step1 : '',
        step2 : 'hidden',
        step3 : 'hidden'
    })

   

    const nextStep : React.MouseEventHandler<HTMLButtonElement> = (e)  => {
        e.preventDefault()
        if(step === 1) {
            setStep(2)
            setSteps({
                step1 : 'hidden',
                step2 : '',
                step3 : 'hidden'
            })
         } else {
             setStep(3)
             setSteps({
                step1 : 'hidden',
                step2 : 'hidden',
                step3 : ''
            })
        }
        
    }
    const back = () => {
        if(step === 2) {
            setStep(1)
            setSteps({
                step1 : '',
                step2 : 'hidden',
                step3 : 'hidden'
            })
         } else {
             setStep(2)
             setSteps({
                step1 : 'hidden',
                step2 : '',
                step3 : 'hidden'
            }) 
        }
    }

  return (
    <div className='flex flex-col items-center w-full p-10'>
        <h2 className='text-4xl font-bold pb-6'>إضافة ترحيل</h2>
        <StepIndicator step={step}/>

        <form className='w-full flex flex-col gap-3 items-center pt-10'>
{/* ---------------------------------------step 1--------------------------------------- */}
            <div className={`${steps.step1}`}>
                <TextField label='الاسم' type='text'/>
                <Select label='القسم' >
                    <option >الهندسة الميكانيكية</option>
                    <option >الهندسة الكهربائية</option>
                    <option >الهندسة الزراعية</option>
                </Select>
                <Select label='الدفعة' >
                    <option >016</option>
                    <option >017</option>
                    <option >018</option>
                    <option >019</option>
                    <option >020</option>
                    <option >021</option>
                </Select>
                <TextField label='السكن' type='text'/>
                <TextField label='رقم الهاتف' type='tel'/>
                <TextField label='البريد الالكتروني' type='email'/>
                <TextField label='كلمة المرور' type='password'/>
                <TextField label='إعادة كلمة المرور' type='password'/>
            </div>

{/* ---------------------------------------step 2--------------------------------------- */}
            <div className={`${steps.step2}`}>
                <TextField label='موديل المركبة' type='text'/>
                <Select label='عدد المقاعد المتاحة' >
                        <option >4</option>
                        <option >3</option>
                        <option >2</option>
                        <option >1</option>
                </Select>
                <Checkbox text='هل يعمل المكيف ؟'/>
            </div>


{/* ---------------------------------------step 3--------------------------------------- */}
            <div className={`${steps.step3}`}>
                <TextField label='ما المناطق التي تمر بها ؟' type='text'/>
                <TextField label='السعر للراكب' type='text'/>
                <div className='flex max-w-sm gap-6'>
                    <TextField label='زمن الذهاب' type='time'/>
                    <TextField label='زمن الرجوع' type='time'/>
                </div>
                <div className='grid grid-cols-3 items-center'>
                    <p>الايام المتاحة:</p>
                    <Checkbox text='الاحد'/>
                    <Checkbox text='الاثنين'/>
                    <Checkbox text='الثلاثاء'/>
                    <Checkbox text='الاربعاء'/>
                    <Checkbox text='الخميس'/>
                </div>
            </div>
            
            <Button label='متابعة' onClick={nextStep}/>
            { step !== 1 &&
                <h5 className='py-3 text-primary cursor-pointer hover:text-purple-900' onClick={back}>رجوع</h5>
            }
            
        </form>

    </div>
  )
}

export default AddTarheel