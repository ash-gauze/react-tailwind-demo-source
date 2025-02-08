'use client'

import React from 'react';
import { SidebarButton} from '../../components/sidebar/index.tsx';
//import { ToastProvider } from '../../components/toast/ToastProvider.js';
////import { ToastConsumerButton, ToastConsumerArray } from '../../components/toast/ToastConsumer.js'
//import {ToastConsumerArray,ToastProvider} from '../../components/toastv2/index.tsx'
import {ToastContextProvider,ToastContextConsumer} from '../../components/toastv3/index.tsx'
import {ToastArrayComponent} from '../../components/toastv3/ToastArrayComponent.tsx'
import { Accordion } from '../../components/accordion/index.tsx';
import '../globals.css';

const page = (children:React.ReactNode) => {

  return (
    <div>
          <h1 className='py-8 text-xl '>Try some of these custom components (vanilla react components)</h1>
          <table className='min-w-[30rem]'>
            <thead>
              <tr className='my-4 border-b-2 border-slate-100'>
                <th className='p-4'>Description</th>
                <th className='p-4'>Component</th>
              </tr>
            </thead>
            <tbody>
              <tr className='m-2 border-b-2 border-slate-200'>
                <td className='p-4'>Popup Toast Component</td>
                
              </tr>
              <tr className='m-2 border-b-2 border-slate-300'>
                <td className='p-4'>Activate Sidebar</td>
                <td className='p-4'><SidebarButton/></td>
              </tr>
            </tbody>
          </table>
          <h2 className='mt-[8rem] mb-4 pt-4 pl-4'>Custom Accordion Element (nested)</h2>
          <section className='p-4  bg-slate-100  max-w-[40rem]'>
            <Accordion>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              <Accordion>
                nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum
              </Accordion>
            </Accordion>
          </section>
          <ToastContextProvider>
    <ToastContextConsumer/>
    <ToastArrayComponent/>
          </ToastContextProvider>
 </div>
  )
}

export default page
