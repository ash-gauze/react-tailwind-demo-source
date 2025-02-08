
'use client'

import { useToastContext } from './ToastContext';


const ToastContextConsumer = () => {
  const {handleInc}= useToastContext();
  if(handleInc) {
  return (
    <>
    <button onClick={handleInc}>click to iterate</button>
    </>
  )}
  else { 
    throw new Error('missing toast context value for handle InC')
  }
}

export {ToastContextConsumer} 

