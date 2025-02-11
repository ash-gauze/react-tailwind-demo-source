
'use client'

import React,{useState,JSX} from 'react';
import {SidebarContext} from './SidebarContext.tsx';
import { ISidebarContext} from './SidebarContext.tsx';
import {SidebarBody}    from './SidebarBody.tsx';


interface SidebarProviderProps {
  children?:React.ReactNode;
  attributes?:JSX.IntrinsicAttributes;
}

const SidebarProvider = (props:SidebarProviderProps) => {
  const [isOpen,setOpen] = useState(null);
  const value:ISidebarContext = {sidebarState:isOpen,setSidebarState:setOpen}

  return (
    <SidebarContext.Provider value={value}>
      <SidebarBody/>
      {props.children}
    </SidebarContext.Provider>
  )
}

export {SidebarProvider}

