import React, {useState} from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiOutlineBars, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { IoMdNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io';
import { RxCross2  } from 'react-icons/rx';
import { MdLogout } from 'react-icons/md';
import { GiSuitcase } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../pages/utils/Firebase';
import { firstMenuSections, secondMenuSections, thirdMenuSections} from './Content';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropDown, setDropDown] = useState(false)
  const [user, loading] =useAuthState(auth);
  


  return (
    <>
      <nav>
        <div className='p-6 font-san flex flex-wrap justify-between items-center max-h-[100px] shadow-md sticky top-0 left-0 z-20 bg-white font-semibold lg:space-x-[400px] lg:mx-3'>
          <div className='flex items-center space-x-10 lg:space-x-[162.2px]'>
            <div className='flex space-x-2 items-center'>
              <Image className='w-[100%] lg:w-[100%] h-[25px] object-cover' src='/Union.png' width={100} height={1000} alt='Logo'/>
              <Image className='w-[100%] lg:w-[100%] h-[25px] object-cover' src= '/lendsqr.png' width={100} height={1000} alt='Logo'/>
            </div>
            <div className='hidden justify-center items-center lg:flex'>
              <input className='w-[400px] h-[40px] p-4 rounded-l-[8px] focus:border-lime outline-none text-[14px]' type="text" placeholder='Search for anything'/>
              < AiOutlineSearch fontSize={40} className='bg-lime p-2 rounded-r-[8px]'/>
            </div>
          </div>
          <div className='space-x-8 justify-center items-center hidden lg:flex'>
            <Link href='#'> Docs </Link>
            < IoMdNotificationsOutline fontSize={30} />
            <div className='flex space-x-2 ml-[50.16px] items-center'>
              <img className='w-[48px] object-cover rounded-full' src={user?.photoURL} alt='user-image' />
              <p>{user?.displayName}</p>
              {dropDown
                ? (
                    <div className='relative'>
                      <button className='focus:opacity-20'> < IoMdArrowDropdown onClick={() => setDropDown(false)} fontSize={25} className='cursor-pointer'/> </button>
                      <div className='absolute top-14 -right-4 flex flex-col space-y-4 items-center justify-center z-20 bg-white shadow-md border-r border-b border-l p-3'>
                        <button className='flex space-x-2 items-center hover:text-lime p-3 font-medium duration-200'> < AiOutlineUser fontSize={25}/> <span>Profile</span> </button>
                        <button className='flex space-x-2 items-center hover:text-lime p-3 font-medium duration-200'> < AiOutlineSetting fontSize={25}/> <span>Settings</span> </button>
                        <button onClick={() => auth.signOut} className='flex space-x-2 items-center hover:text-lime p-3 font-medium duration-200'> < MdLogout fontSize={25}/> <span>Log out</span> </button>
                      </div>
                    </div>
                  )
                : < IoMdArrowDropdown onClick={() => setDropDown(true)} fontSize={25} className='cursor-pointer'/>
              }
            </div>
          </div>


            {/* MOBILE MENU SECTION */}

          <div className='flex items-center space-x-3 lg:hidden'>
            <img className='w-[48px] object-cover rounded-full cursor-pointer' src={user?.photoURL} alt='user-image' onClick={() => {console.log('image was clicked')}}/>
            {toggleMenu
              ? (
                  <div className='h-screen w-[30vh] z-20 fixed top-0 right-0 overflow-auto pb-[50px] shadow-lg bg-white'>
                    < RxCross2 onClick={() => setToggleMenu(false)} fontSize={30} className='fixed top-8 right-8 cursor-pointer lg:hidden'/>
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
              )
              : < AiOutlineBars onClick={() => setToggleMenu(true)} fontSize={30} className='cursor-pointer'/>
            }
            {toggleMenu
              ? (<div className="bg-black/70 fixed w-screen h-screen z-10 top-0 left-0 m-0 p-0"></div>)
              : ''
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;