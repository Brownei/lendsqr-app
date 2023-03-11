import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { GiSuitcase } from 'react-icons/gi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { firstMenuSections, secondMenuSections, thirdMenuSections} from './Content';


const Menubar = () => {

  return (
    <>
      <section>
        <div className='relative hidden lg:block'>
          <div className='fixed left-0 top-[90px] h-screen w-[283px] overflow-auto bg-white z-30 shadow-lg font-san pb-[130px]'>
            <div className='flex flex-col space-y-[30px] mx-2 p-3 text-[14px]'>
              <Link className='flex space-x-2 items-center justify-start py-1 px-4 hover:border-l-4 hover:border-lime font-semibold text-darkGray' href='#'> < GiSuitcase fontSize={22} color='darkGray'/> <span>Switch Organization</span> < IoMdArrowDropdown fontSize={18} className='cursor-pointer'/></Link>
              <Link className='flex space-x-2 items-center justify-start py-1 px-4 hover:border-l-4 hover:border-lime text-darkGray' href='#'> < FaHome fontSize={22} color='darkGray'/> <span>Dashboard</span></Link>
            </div>
            <div>
              <h2 className='text-[12px] font-medium mx-7 p-1 mt-5'>CUSTOMERS</h2>
              <div className='flex flex-col space-y-4 justify-start mx-2 p-3 text-[16px] text-darkGray'>
                {firstMenuSections.map(firstMenuSection => (
                  <Link href='/dashboard' className='flex space-x-2 items-center justify-start py-1 px-4 hover:border-l-4 hover:border-lime'> {firstMenuSection.icons} <span>{firstMenuSection.title}</span> </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className='text-[12px] font-medium mx-7 p-1 mt-5'>BUSINESSES</h2>
              <div className='flex flex-col space-y-4 justify-start mx-2 p-3 text-[16px] text-darkGray'>
                {secondMenuSections.map((secondMenuSection) => (
                  <Link href='/dashboard' className='flex space-x-2 items-center justify-start py-1 px-4 hover:border-l-4 hover:border-lime'> {secondMenuSection.icons} <span>{secondMenuSection.title}</span> </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className='text-[12px] font-medium mx-7 p-1 mt-5'>SETTINGS</h2>
              <div className='flex flex-col space-y-4 justify-start mx-2 p-3 text-[16px] text-darkGray'>
                {thirdMenuSections.map((thirdMenuSection) => (
                  <Link href='/dashboard' className='flex space-x-2 items-center justify-start py-1 px-4 hover:border-l-4 hover:border-lime'> {thirdMenuSection.icons} <span>{thirdMenuSection.title}</span> </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menubar;