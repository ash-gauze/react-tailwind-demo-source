'use client'

import {ToastType} from './ToastContext';

type ToastActionType = {
  actionType:string;
  id?:string;
}

const toastReducer = (state:Array<ToastType>,action:ToastActionType) => {
  if (action.actionType === 'INC') {
    const id = crypto.randomUUID();
    const newToast: ToastType = { bodyText: 'basic toast', id: id, type: 'basic style' }
    const newState: Array<ToastType> = state.map(item => item);
    state.push(newToast);
    return (newState)
    
  } else if (action.actionType === 'DEC') {
    const updatedState = state.filter((item)=> item.id !==action.id);
    return(updatedState);
  } else {
    throw new Error('invalid or missing action string')
  }
}

export{toastReducer}
export type {ToastActionType}
