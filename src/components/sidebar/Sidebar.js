'use client'

import React,{useContext,useState} from 'react'
import {SidebarContext} from './SidebarContext';


//the button text may be blank to close on blur 
const SidebarClose = ({ buttonText }) => {
  const sidebarContext = useContext(SidebarContext);
  return (
    <>
      <button onClick={() => { if (sidebarContext.isOpen === true) 
      { sidebarContext.setOpen(false) } }}>{buttonText}</button>
    </>
  )
}

const SidebarBody = () => {
  const sidebarContext = useContext(SidebarContext);
  const handleClick = () => {
    sidebarContext.setOpen(!sidebarContext.isOpen);
  }

return (
    <>
      <SidebarClose/>
      <div onClick={() => sidebarContext.setOpen(false)} className={`${sidebarContext.isOpen ? 'z-30 fixed top-0 left-0 bg-black bg-opacity-25 w-full h-full' : 'hidden'}`} onBlur={() => sidebarContext.setOpen(false)}>
      </div>

      <div className={`
                        overflow-y-auto  h-screen focus:visible 
                        flex flex-col place-items-start flex-nowrap 
                        bg-white ${sidebarContext.isOpen ? 'w-[18rem] left-0 top-0' : 'left-[-18rem] top-0'} fixed z-40 `}>



        <div className='flex flex-col flex-nowrap place-items-start  my-6 mx-2'>
          <button className='nav-burger py-4' onClick={() => handleClick(false)}>x</button>
        </div>
        <div className='flex flex-col flex-nowrap place-items-start bg-slate-100 my-4 mx-8'>




          <button className='focus:underline  text-xl pt-8 pb-3 decoration-orange-300'>section heading</button>

          <button className='
            pt-3 px-4 border-l-2
            border-white text-slate-600 hover:text-slate-900 
            hover:border-slate-300 focus:text-slate-900 
            focus:border-orange-600'>
            hello
          </button>

          <button className='
            pt-3 px-4 border-l-2
            border-white text-slate-600 hover:text-slate-900 
            hover:border-slate-300 focus:text-slate-900 
            focus:border-orange-600'>
            hello
          </button>

          <button className='
            pt-3 px-4 border-l-2
            border-white text-slate-600 hover:text-slate-900 
            hover:border-slate-300 focus:text-slate-900 
            focus:border-orange-600'>
            hello
          </button>
        </div>

        <div className='flex flex-col flex-nowrap place-items-start bg-slate-100 my-4 mx-8'>

          <button className='focus:underline  text-xl pt-8 pb-3 decoration-orange-300'>section heading</button>
          <button className='
            pt-3 px-4 border-l-2
            border-white text-slate-600 hover:text-slate-900 
            hover:border-slate-300 focus:text-slate-900 
            focus:border-orange-600'>
            hello
          </button>

          <button className='
            pt-3 px-4 border-l-2
            border-white text-slate-600 hover:text-slate-900 
            hover:border-slate-300 focus:text-slate-900 
            focus:border-orange-600'>
            hello
          </button>
          <button className='
            pt-3 px-4 border-l-2
            border-white text-slate-600 hover:text-slate-900 
            hover:border-slate-300 focus:text-slate-900 
            focus:border-orange-600'>
            hello
          </button>
        </div>
      </div>
    </>
  )
}


export {SidebarBody}
