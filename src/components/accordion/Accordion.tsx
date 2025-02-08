
'use client'

import React,{useRef,useState,FunctionComponent,PropsWithChildren} from 'react';

/*
interface Accordion {
  className:string,
  children:FunctionComponent<PropsWithChildren>,
}
*/

type AccordionProps = {children:React.ReactNode}

const Accordion = ({children}:AccordionProps) => {
  
  const openStyle = '';
  const closedStyle = 'overflow-hidden max-h-[0rem]';

  const [isOpen,setOpen] = useState(false);
  const [accStyle,setAccStyle] = useState(closedStyle) 
  const accRef = useRef(null) as unknown as React.Reference;
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


