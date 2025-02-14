
'use client'

import { useToastContext } from './ToastContext';

interface ToastConsumerProps {
  className?:string;
}


const ToastContextConsumer = (props:ToastConsumerProps) => {
  const {handleInc}= useToastContext();
  if(handleInc) {
  return (
    <>
    <button className={props.className} onClick={handleInc}>click for toasts</button>
    </>
  )}
  else { 
    throw new Error('missing toast context value for handle InC')
  }
}

export {ToastContextConsumer} 

