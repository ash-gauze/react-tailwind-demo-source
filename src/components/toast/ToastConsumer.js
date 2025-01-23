'use client'

import React,{useContext} from 'react';
import {ToastContext} from './ToastContext.js';
import {Toast} from './Toast.js';




const ToastConsumerArray = () => {
  const { toastArray, handleRemoveToast} = useContext(ToastContext);
  if (toastArray) {
    return (
      <>
        <div className='toast-container'>
          {toastArray.map((toast) =>
            <Toast
              key={toast.id}
              id={toast.id}
              toastStyle={toast.toastStyle}
              toastMessage={toast.toastMessage}></Toast>
          )
          }
        </div>
      </>
    )
  }
}

const toastEvent = {
  eventType: '',
  data: { id: '', toastType: '' }
}
const ToastConsumerButton = () =>  {
  const {toastArray,handleAddToast} = useContext(ToastContext);
  console.log('fired from toast consumer button ')
  
  const handleClick = () => {
    handleAddToast({eventType:'ADD_TOAST'})
  }

  return (
    <div className='control-button'>
    <button onClick={handleClick}>Create Toast
    </button>
  </div>
  )
}

export {ToastConsumerArray,ToastConsumerButton}
