
'use client'

import React,{useState} from 'react';

type AccordionProps = {children:React.ReactNode}

const Accordion = ({children}:AccordionProps) => {
  
  const openStyle = '';
  const closedStyle = 'overflow-hidden max-h-[0rem]';

  const [isOpen,setOpen] = useState(false);

  const [accStyle,setAccStyle] = useState(closedStyle) 


  const handleOpen = () => {
    if(isOpen === true) {
      setAccStyle(closedStyle);
      setOpen(!isOpen)
    } else {
      setAccStyle(openStyle);
      setOpen(!isOpen)
    }
  }
  
  
  return (
    <>
      <button className={'control-button bg-slate-200 my-4'} onClick={handleOpen}>Accordion</button>
    <div className={`${accStyle}`}>
        {children}
    </div>
  </>
  )
}

export {Accordion }


