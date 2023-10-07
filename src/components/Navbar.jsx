import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(value => !value)
  }

  return (
    <nav className='bg-[#F0EFFB] px-10 py-3 checkpoint:px-12 checkpoint:py-[22px] flex items-center flex-wrap z-50 '>
      <div className='flex items-center gap-1 mr-12 max-checkpoint:flex-1 z-50'>
        <img src="src/icons/HomeIcon.svg"/>

        <h2 className="font-bold text-xl font-PlusJakartaSans text-[#100A55]">Estatery</h2>
      </div>

      <div className='hidden checkpoint:flex flex-1'>
        <ul className='flex items-center gap-12 text-[#000929] flex-1'>
          <li>
            {/* replace anchor tags with Link */}
            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">Rent</a>
          </li>
          <li>
            {/* replace anchor tags with Link */}
            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">Buy</a>
          </li>
          <li>
            {/* replace anchor tags with Link */}
            <a className='flex gap-2 group relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">
              <span>Manage Property</span>
              <img className='group-hover:-rotate-45 transition-all duration-200' src="src/icons/DropDownIcon.svg"/>
            </a>
          </li>
          <li>
            {/* replace anchor tags with Link */}
            <a className='flex gap-2 group relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">
              <span>Resources</span>
              <img className='group-hover:-rotate-45 transition-all duration-200' src="src/icons/DropDownIcon.svg"/>
            </a>
          </li>
        </ul>

        {/* buttons container */}
        <div className='flex items-center gap-4 '>
          <button className='px-[24px] py-3 rounded-lg border-2 border-[#E0DEF7] font-bold text-[#000929]'>Login</button>

          <button className='px-[24px] py-3 rounded-lg bg-[#7065F0] font-bold text-white'>Sign up</button>
        </div>
      </div>
      

      <button onClick={handleMenu} className='checkpoint:hidden px-[24px] py-3 z-[1000]'>
        {isMenuOpen ? (<AiOutlineClose className='text-2xl' />): (<img src="src/icons/menu.svg" alt="" />)}
      </button>

      {isMenuOpen && (
        <ul className='checkpoint:hidden text-lg flex flex-col gap-4 bg-[#F0EFFB] items-center justify-center absolute left-0 bottom-0 top-0  w-full z-50'>
          <li>
            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] hover:after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">Rent</a>
          </li>
          <li>
            <a className='relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">Buy</a>
          </li>
          <li>
            {/* replace anchor tags with Link */}
            <a className='flex gap-2 group relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">
              <span>Manage Property</span>
              <img className='group-hover:-rotate-45 transition-all duration-200' src="src/icons/DropDownIcon.svg"/>
            </a>
          </li>
          <li>
            {/* replace anchor tags with Link */}
            <a className='flex gap-2 group relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#000929] after:rounded-md after:scale-0 hover:after:scale-100 after:origin-right hover:after:origin-left after:transition-all after:duration-500' href="/">
              <span>Resources</span>
              <img className='group-hover:-rotate-45 transition-all duration-200' src="src/icons/DropDownIcon.svg"/>
            </a>
          </li>

          <li>
            <button className='min-w-[180px] py-3 rounded-lg border-2 border-[#E0DEF7] font-bold text-[#000929]'>Login</button>
          </li>

          <li>
            <button className='min-w-[180px] py-3 rounded-lg bg-[#7065F0] font-bold text-white'>Sign up</button>
          </li>
        </ul>
      )}
      
    </nav>
  )
}
