'use client' 

import React,{useContext,useState} from 'react'
import {SidebarContext} from './SidebarContext.tsx';
import {SidebarBody} from './SidebarBody.tsx'
import {SidebarButton} from './SidebarButton.tsx';

const SidebarProvider = ({children}) => {
  const [isOpen,setOpen] = useState(false);
  const value = {isOpen,setOpen}

  return (
    <SidebarContext.Provider value={value}>
      <SidebarBody/>
      {children}
    </SidebarContext.Provider>
  )
}

export {SidebarProvider,SidebarButton}

