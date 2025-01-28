'use client'
import React,{useContext,useState} from 'react';
import {SidebarContext} from './SidebarContext.tsx'; 

const SidebarClose = () =>  {
  const sidebarContext= useContext(SidebarContext);

  return (
    <>
      <button onClick={() => { if (sidebarContext.isOpen === true) { sidebarContext.setOpen(false) } }}> </button>
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
      <div onClick={() => sidebarContext.setOpen(false)} className={`${sidebarContext.isOpen ? 'z-30 fixed top-0 left-0 bg-black bg-opacity-25 w-full h-full' : 'hidden'}`} onBlur={() => sidebarContext.setOpen(false)}> </div>

      <div className={`x`}> </div>
    </>
  )
}
