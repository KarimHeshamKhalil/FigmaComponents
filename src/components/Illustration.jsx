import React from 'react'

export default function Illustration() {
  return (
    <div className='relative overflow-hidden h-[500px] p-10 bg-[#F7F7FD] text-[#100A55] min-w-[300px] max-w-[416px] font-PlusJakartaSans border-[1.5px] border-[#E0DEF7] rounded-lg z-0'>
      <h2 className='font-bold text-2xl leading-10 mb-4'>The new way to find <br /> your new home</h2>

      <p className='font-medium w-72 mb-6'>Find your dream place to live in with more than 10k+ properties listed.</p>

      <button className='bg-[#100A55] py-[10px] px-4 rounded-lg text-white'>Browse Properties</button>

      <img className='absolute right-0' src="src/icons/Illustration-Image.svg"/>
    </div>
  )
}
