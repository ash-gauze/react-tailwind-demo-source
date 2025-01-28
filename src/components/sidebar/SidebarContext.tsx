'use client'

import {createContext,Context} from 'react'

/* Note: need to make a type that will be the context */

const SidebarContext:Context<any> = createContext(false);
export {SidebarContext}
