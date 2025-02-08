'use client'

import React from 'react'
import { ToastContext } from './ToastContext.tsx';
import { toastReducer } from './ToastReducer.tsx';
import type {ToastActionType} from './ToastReducer.tsx';
import type { ToastContextTypes,ToastType} from './ToastContext.tsx'


interface ToastProviderProps { children?: React.ReactNode };


const ToastContextProvider = (props: ToastProviderProps) => {

  //  const [contextNumber,setContextNumber] = React.useState(0);

  const toastArray: Array<ToastType> = [{bodyText:'basic toast',id:'0',type:'css style here'}];

  const [toastArrayState, setContextNumber] = React.useReducer(toastReducer, toastArray)

  const handleInc = () => {
    setContextNumber({actionType:'INC'})
    toastArrayState.map((item)=> console.log(item));
  }

  const handleDec = (idToDelete:string) => {
    setContextNumber({actionType:'DEC',id:idToDelete})
    toastArrayState.map((item)=> console.log(item))
  }

  const values: ToastContextTypes = {toastArrayState, handleInc, handleDec }

  return (
    <ToastContext.Provider value={values}>
      {props.children}
    </ToastContext.Provider>
  )
}


export { ToastContextProvider } 
