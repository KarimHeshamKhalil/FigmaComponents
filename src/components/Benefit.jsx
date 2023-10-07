import React from 'react'
import Illustration from './Illustration'

export default function Benefit() {
  return (
   <section className='px-6 py-2 flex flex-col justify-center items-center xl:py-[100px] xl:px-40 xl:flex-row gap-16'>
    <Illustration />

    <div className='font-PlusJakartaSans grid small:grid-cols-2 gap-x-6 gap-y-16'>
      {/* Benefit Section first sexy card */}
      <div className='max-small:flex gap-6'>
        <img className='relative -top-4' src="src/icons/benefitCardIcon-1.svg" />

        <div>
          <h3 className='text-[#000929] font-bold text-2xl leading-9'>Property Insurance</h3>

          <p className='text-[#4D5461] w-72'>We offer our customer property protection of liability coverage and insurance for their better life.</p>
        </div>
      </div>

      {/* Benefit Section second sexy card */}
      <div className='max-small:flex gap-6'>
        <img className='relative -top-4' src="src/icons/benefitCardIcon-2.svg" />

        <div>
          <h3 className='text-[#000929] font-bold text-2xl leading-9'>Best Price</h3>

          <p className='text-[#4D5461] w-72'>Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.</p>
        </div>
      </div>

      {/* Benefit Section third sexy card */}
      <div className='max-small:flex gap-6'>
        <img className='relative -top-4' src="src/icons/benefitCardIcon-3.svg" />

        <div>
          <h3 className='text-[#000929] font-bold text-2xl leading-9'>Lowest Commission</h3>

          <p className='text-[#4D5461] w-72'>You no longer have to negotiate commissions and haggle with other agents it only cost 2%!</p>
        </div>
      </div>

      {/* Benefit Section fourth sexy card */}
      <div className='max-small:flex gap-6'>
        <img className='relative -top-4' src="src/icons/benefitCardIcon-4.svg" />

        <div>
          <h3 className='text-[#000929] font-bold text-2xl leading-9'>Overall Control</h3>

          <p className='text-[#4D5461] w-72'>Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.</p>
        </div>
      </div>
    </div>
   </section>
  )
}
