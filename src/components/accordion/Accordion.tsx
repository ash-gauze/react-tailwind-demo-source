
'use client'

import React,{useState} from 'react';

//type AccordionProps = {children:React.ReactNode}

interface AccordionProps  {
  children?:React.ReactNode;
  className?:string;
}

const Accordion = (props:AccordionProps) => {
  const openStyle = 'min-h-24';
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
      <button className={props.className} onClick={handleOpen}>Accordion</button>
    <div className={`${accStyle}`}>
        {props.children}
    </div>
  </>
  )
}

export {Accordion }


