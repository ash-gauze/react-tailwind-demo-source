'use client'

import React,{useContext,useState} from 'react'

import {SidebarContext} from './SidebarContext.js';
import {SidebarBody} from './SidebarBody.js'

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

export {SidebarProvider}
