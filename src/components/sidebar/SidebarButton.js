'use client' 

import React,{useContext} from 'react';
import {SidebarContext} from './SidebarContext';

const SidebarButton = ({buttonStyle}) => {
  const sidebarContext = useContext(SidebarContext);
  const handleClick = () => {
    sidebarContext.setOpen(!sidebarContext.isOpen);
    console.log('hello');
  }
  return (
    <>
      <button className={buttonStyle} onClick={handleClick}>≡</button>
    </>
  )
}

export {SidebarButton} 
