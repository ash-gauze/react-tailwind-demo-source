'use client'

import React from 'react';
//type ToastContextTypes = { valueData:number; handleIterator:()=>void; };
type ToastType = {bodyText:string,type:string,id:string,destructor?:(id:string)=>void}
type ToastContextTypes = {toastArrayState:Array<ToastType>;handleInc:()=>void;handleDec:(id:string)=>void;};


const ToastContext = React.createContext<ToastContextTypes | undefined >({}as ToastContextTypes);

const useToastContext = () => {
  const toastContext = React.useContext(ToastContext);
  if (toastContext !== undefined) {
    return (toastContext);
  } else {
    throw new Error('the toast context is \'undefined\'');
  }
}

export {ToastContext,useToastContext}

export type {ToastContextTypes,ToastType}
