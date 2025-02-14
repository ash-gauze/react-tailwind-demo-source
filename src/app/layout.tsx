
import "./globals.css";
import React from 'react'
import Link from 'next/link';
import {SidebarProvider,SidebarButton} from '../components/sidebar/index.tsx';

type metadata = {
  title:string,
  canonical:string
}

export const metadata:metadata = {
  title:'Ashton\'s Cool Website',
  canonical:'https://my-website.org/'
}
//z index: carousel viewport = 10, navbar = 20, sidebar = 40, modal bg = 30 

interface IRootLayout {
  children:React.ReactNode,
}

export default function RootLayout(props:IRootLayout) {
  


  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <header className={'w-full z-20 bg-[--color-one] fixed top-0 left-0'}>
            <ul className={'nav-bar'}>
              <Link className={'nav-link'} href={'/'}>home </Link>
              <Link className={'nav-link md:inline-flex hidden'}
                href={'/carousel-demo'}>carousels </Link>
              <Link className={'nav-link md:inline-flex hidden'} href={'/component-demo'}>components</Link>
              <Link className={'nav-link md:inline-flex hidden'} href={'/pagination-demo'}>pagination</Link>
              <SidebarButton className={'md:hidden nav-link max-w-12 mx-4'}/>
            </ul>
          </header>
          <main className={'mt-[8rem]  m-auto max-w-[65rem]'}>
            {props.children}
          </main>
          <footer className={'w-full px-6 py-4 bg-[--color-one]'}>
          </footer>
        </SidebarProvider>
      </body>
    </html>
  );
};


