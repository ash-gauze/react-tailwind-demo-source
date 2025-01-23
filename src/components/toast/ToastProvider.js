'use client'

import React,{useState,useReducer} from 'react';
import {ToastContext} from './ToastContext.js';
import {toastReducer} from './ToastReducer.js';

const initialState = [ {
  toastStyle:'control-button w-24 mx-8', toastMessage:'default message', id:'0' } ];

const ToastProvider = ({children}) =>  {
  const [toastArray,arrayDispatch] = useReducer(toastReducer,[]);


  const handleAddToast = () => {
    arrayDispatch({eventType:'ADD_TOAST'});
  }

  const handleRemoveToast = (id) => {
    arrayDispatch({eventType:'DEL_TOAST',id:id})
  }

  const value = {toastArray,handleAddToast,handleRemoveToast};


  return (
    <>
      <ToastContext.Provider value={value}>
        {children}
      </ToastContext.Provider>
    </>
  )
}

export {ToastProvider}
