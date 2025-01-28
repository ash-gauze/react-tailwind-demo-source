'use client'

import { SidebarButton} from '../../components/sidebar/index.tsx';
import { useContext } from 'react'
import { ToastProvider } from '../../components/toast/ToastProvider.js';
import { ToastConsumerButton, ToastConsumerArray } from '../../components/toast/ToastConsumer.js'
import { Accordion } from '../../components/accordion/Accordion.js';
import { ToastTestButton} from '../../components/toast/ToastTestButton.js'
import '../globals.css';

const page = ({ children }) => {

  return (
    <ToastProvider>

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
                <td className='p-4'><ToastConsumerButton/></td>
              </tr>
              <tr className='m-2 border-b-2 border-slate-300'>
                <td className='p-4'>Activate Sidebar</td>
                <td className='p-4'><SidebarButton/></td>
              </tr>
            </tbody>
          </table>
          <h2 className='mt-[8rem] mb-4 pt-4 pl-4'>Custom Accordion Element (nested)</h2>
          <section className='p-4  bg-slate-100  max-w-[40rem]'>
        <ToastConsumerArray/>
            <Accordion>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              <Accordion>
                nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum nested lorem ipsum
              </Accordion>
            </Accordion>
          </section>

          {children}
        </div>

    </ToastProvider>
  )
}

export default page
