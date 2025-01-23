import React,{useContext,useEffect,useRef} from 'react';
import {ToastContext} from './ToastContext';

const Toast = ({toastStyle, toastMessage, id}) => {
  const {handleRemoveToast} = useContext(ToastContext);
  const timerID = useRef(null);

  useEffect(() => {
    timerID.current = setTimeout(() => {
      deleteToast();
    }, 3200);
    return () => {
      clearTimeout(timerID.current);
    }
  }, []);

  const deleteToast = () => {
    handleRemoveToast(id)
  }
  return (
    <div className={toastStyle}>
      <button onClick={deleteToast}>{toastMessage}</button>
    </div>
  )
}

export {Toast}
