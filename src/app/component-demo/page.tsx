'use client'

import React from 'react';

import { SidebarButton } from '../../components/sidebar/index.tsx';
import { ToastContextProvider, ToastContextConsumer } from '../../components/toastv3/index.tsx'
import { ToastArrayComponent } from '../../components/toastv3/ToastArrayComponent.tsx';
import { Accordion } from '../../components/accordion/index.tsx';
import '../globals.css';



const page = () => {








  return (
    <>
      <ToastContextProvider>
        <article className={'article-body'}>
          <div className={'grid grid-cols-2 grid-rows-2 gap-4'}>
            <div className={'article-item'}> grid button description here</div>
            <ToastContextConsumer className={'article-button'} />
            <ToastArrayComponent />
            <div className={'article-item'}>Open the sidebar </div>
            <SidebarButton className={'article-button'} />
          </div>
        </article>

        <article className={'article-body'}>
          <p className={'article-item'}> here some body text</p>
          <Accordion className={'article-button'}>
            <p className={'article-button'}>Accordion components may be nested</p>
            <Accordion className={'article-button'}>
              <h1 className={'article-item'}>Lorem Ipsum</h1>
              <p className={'article-item'}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
            </Accordion>
          </Accordion>
        </article>
      </ToastContextProvider>
    </>
  )
}
export default page






