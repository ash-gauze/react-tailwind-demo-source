'use client'
import React, { useContext} from 'react';
import { SidebarContext } from './SidebarContext.tsx';
import type { ISidebarContext} from './SidebarContext.tsx'
import './style.css';

const SidebarBody = () => {
  const {sidebarState,setSidebarState}= useContext(SidebarContext) as ISidebarContext;

  const handleClick = () => {
    setSidebarState(!sidebarState);
  }

  if (sidebarState) {

    return (
      <>
        <div onClick={handleClick} className={`${sidebarState? 'z-30 fixed top-0 left-0 bg-black bg-opacity-25 w-full h-full' : 'hidden'}`} onBlur={() => setSidebarState(false)}>
        </div>

        <div className={`
                        overflow-y-auto  h-screen focus:visible 
                        flex flex-col place-items-start flex-nowrap 
                        bg-white ${sidebarState ? 'w-[18rem] left-0 top-0' : 'left-[-18rem] top-0'} fixed z-40 `}>



          <div className='flex flex-col flex-nowrap place-items-start  my-6 mx-2'>

            <button className='nav-burger py-4' onClick={handleClick}>x</button>
          </div>

          <div className='flex flex-col flex-nowrap place-items-start bg-slate-100 my-4 mx-8'>

            <button className='focus:underline  text-xl pt-8 pb-3 decoration-orange-300'>section heading</button>

            <button className='sidebar-button'>
              hello
            </button>

            <button className='sidebar-button'>
              hello
            </button>

            <button className='sidebar-button'>
              hello
            </button>
          </div>

          <div className='flex flex-col flex-nowrap place-items-start bg-slate-100 my-4 mx-8'>

            <button className='focus:underline  text-xl pt-8 pb-3 decoration-orange-300'>section heading</button>

            <button className='sidebar-button'>
              hello
            </button>

            <button className='sidebar-button'>
              hello
            </button>

            <button className='sidebar-button'>
              hello
            </button>
          </div>

        </div>
      </>
    )
} else {
  return 'sidebar context is null or undefined'
}
}
export { SidebarBody }

