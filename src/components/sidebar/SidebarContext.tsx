'use client'

import {createContext} from 'react'

/* Note: need to make a type that will be the context */

interface ISidebarContext {
  sidebarState:boolean;
  setSidebarState:(state:boolean)=>void;
}

const SidebarContext= createContext<ISidebarContext | null>(null);
export {SidebarContext}
export type {ISidebarContext}


