'use client' 

import React,{useContext} from 'react';
import {SidebarContext} from './SidebarContext.tsx';
import './style.css';
import '../../app/globals.css';

interface SidebarButtonProps {
  className:string;
}

const SidebarButton = (props:SidebarButtonProps) => {
  const sidebarContext = useContext(SidebarContext);

  const handleClick = () => {
    sidebarContext?.setSidebarState(!sidebarContext.sidebarState);
  }


  return (
    <>
      <button className={props.className} onClick={handleClick}>≡</button>
    </>
  )
}

export {SidebarButton} 
