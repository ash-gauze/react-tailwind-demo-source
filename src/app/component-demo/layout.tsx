import React from 'react';

interface LayoutProps {
  children?:React.ReactNode;
}

export default function layout(props:LayoutProps) {

  return(
  <>
{props.children}

  </>
  )
}
