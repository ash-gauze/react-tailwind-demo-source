'use client'

import React from 'react'
import { ToastContext } from './ToastContext.tsx';
import { toastReducer } from './ToastReducer.tsx';
import type { ToastContextTypes,ToastType} from './ToastContext.tsx'


interface ToastProviderProps { children?: React.ReactNode };


const ToastContextProvider = (props: ToastProviderProps) => {


  const toastArray: Array<ToastType> = [] as Array<ToastType>;

  const [toastArrayState, setContextNumber] = React.useReducer(toastReducer, toastArray)

  const handleInc = () => {
    setContextNumber({actionType:'INC'})
  }

  const handleDec = (idToDelete:string) => {
    setContextNumber({actionType:'DEC',id:idToDelete})
  }

  const values: ToastContextTypes = {toastArrayState, handleInc, handleDec }

  return (
    <ToastContext.Provider value={values}>
      {props.children}
    </ToastContext.Provider>
  )
}


export { ToastContextProvider } 
