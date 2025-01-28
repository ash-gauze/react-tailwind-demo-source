'use client' 

import React,{useContext} from 'react';
import {SidebarContext} from './SidebarContext.tsx';
import './style.css';
import '../../app/globals.css';

const SidebarButton = () => {
  const sidebarContext = useContext(SidebarContext);

  const handleClick = () => {
    sidebarContext.setOpen(!sidebarContext.isOpen);
  }


  return (
    <>
      <button className='nav-burger' onClick={handleClick}>≡</button>
    </>
  )
}

export {SidebarButton} 
