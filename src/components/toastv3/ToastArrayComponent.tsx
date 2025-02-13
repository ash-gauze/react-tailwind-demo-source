
'use client'

import React,{JSX} from 'react';
import {useToastContext,ToastType} from './ToastContext.tsx';



const useInterval = (callback:(toastKey:string)=>void,delayTime:number,toastKey:string,shouldRun:boolean) => {

  const callbackRef = React.useRef(callback);

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback])

  React.useEffect(() => {
    if (!shouldRun) {
      return;
    }
  })

  React.useEffect(() => {
    const intervalID = setInterval(() => callbackRef.current(toastKey), delayTime);
    return () => clearInterval(intervalID)
  }, [delayTime, toastKey])
}

interface ToastProps {
  toastProps:ToastType;
  dismissButton:(id:string)=>void;
  attributes?:JSX.IntrinsicAttributes;
}


//register the toast to the *useInterval* function
const Toast = (props:ToastProps) => {
 
  const {id,bodyText} = props.toastProps;
  const handleDismiss = props.dismissButton;
  
  useInterval(handleDismiss,3000,id,true)

  return (
    <button  onClick={()=>handleDismiss(id)} className={'control-button my-[.2rem]'}>
      <p>{bodyText}</p>
    </button>
   
  )
}


const ToastArrayComponent = () => {
  const {toastArrayState,handleDec} = useToastContext(); 

//if(toastArrayState !==null)
  return(
    <ul className={'toast-container'}>
    {toastArrayState.map(item => <Toast toastProps={item} dismissButton={handleDec} key={item.id}/>)}
    </ul>
  )
}


export {ToastArrayComponent}
