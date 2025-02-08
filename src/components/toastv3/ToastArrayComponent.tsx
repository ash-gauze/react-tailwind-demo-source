
'use client'

import React,{JSX} from 'react';
import {ToastContext,useToastContext,ToastType} from './ToastContext.tsx';
import {ToastContextTypes} from './ToastContext.tsx';


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
 
  const {id,type,bodyText} = props.toastProps;
  const handleDismiss = props.dismissButton;
  
  useInterval(handleDismiss,3000,id,true)

  return (
    
    <button  onClick={()=>handleDismiss(id)} className={'control-button my-[.2rem]'}>
      <p>{bodyText}</p>
    </button>
   
  )
}

interface ToastArrayProps extends React.ComponentPropsWithoutRef<'button'> {
  toasts:Array<ToastType>;
}

const ToastArrayComponent = () => {
  const {toastArrayState,handleDec} = useToastContext() as unknown as ToastContextTypes;

  if(toastArrayState !== undefined) 
  return(
    <ul className={'toast-container'}>
    {toastArrayState.map(item => <Toast toastProps={item} dismissButton={handleDec} key={item.id}/>)}
    </ul>
  )
  else {
    return (<></>)
  }
}

export {ToastArrayComponent}
