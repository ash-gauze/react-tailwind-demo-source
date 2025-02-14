
'use client'
import React from 'react'


interface LayoutProps {
  children:React.ReactNode;
}

function layout(props:LayoutProps) {
  return (
    <>
      {props.children}
    </>
  )
}

export default layout;
