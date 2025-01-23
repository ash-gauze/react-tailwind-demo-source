'use client' 

import React,{useRef,useState} from 'react';


const Accordion = ({children}) => { 

  
  const openStyle = ''
  const closedStyle = 'overflow-hidden max-h-[0rem]'

  const [isOpen,setOpen] = useState(false);
  const [accStyle,setAccStyle] = useState(closedStyle) 
  const accRef = useRef(null);
  const handleOpen = () => {
    if(isOpen === true) {
      setAccStyle(closedStyle);
      setOpen(!isOpen)

      console.log(isOpen + accStyle)
    } else {
      setAccStyle(openStyle);
      setOpen(!isOpen)
      console.log(isOpen + accStyle)
    }
  }
  
  
  return (
    <>
      <button className='control-button bg-slate-200 my-4' onClick={handleOpen}>Accordion</button>
    <div className={`${accStyle}`}>
        {children}
    </div>
  </>
  )
}

export {Accordion }
