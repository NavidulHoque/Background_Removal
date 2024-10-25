import { steps } from '@/data/steps'
import React from 'react'

export default function Steps() {
  return (
    <div className='flex flex-col gap-y-20 py-40'>

      <div className='self-center flex flex-col text-[50px] leading-[63px] text-center bg-gradient-to-r from-[#353535] to-[#9B9B9B] bg-clip-text text-transparent font-semibold'>
        
        <h1>Steps to remove background</h1>

        <h1>image in seconds</h1>

      </div>

      <div className='grid grid-cols-3 gap-10'>

        {steps.map(step => (

          <div 
            key={step.heading}
            className='px-10 py-8 rounded-lg border-[1px] border-[#E1E1E1] shadow-[0_4px_15px_rgba(0,0,0,0.05)] space-y-3'
          >

            <div className='flex items-center gap-x-2'>

              {step.icon}

              <h2 className='text-[24px] leading-[30px] font-medium'>{step.heading}</h2>

            </div>

            <p className='text-[16px] text-[rgba(124,124,124,1)] pl-[53px]'>{step.step}</p>

          </div>

        ))}

      </div>

    </div>
  )
}
