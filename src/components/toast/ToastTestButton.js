'use client'

import React,{useContext,useState} from 'react'
import {ToastContext} from './ToastContext.js';

const ToastTestButton = () => {

  const {toastArray,handleAddToast} = useContext(ToastContext);

  const handleClick = () => {
//    console.log(toastArray)
    //console.log(toastReducer)

    console.log('hello from reducer test ')
  }

  return(
  <button onClick={handleAddToast}>
click here to test toast
  </button>
  )
}

export {ToastTestButton}
