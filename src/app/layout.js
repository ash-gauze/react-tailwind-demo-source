import "./globals.css";
import Link from 'next/link';
import {SidebarProvider,SidebarButton} from '../components/sidebar/index.tsx';


export const metadata = {
  title:'Ashton\'\s Cool Website',
  canonical:'https://my-website.org/'
}
//z index: carousel viewport = 10, navbar = 20, sidebar = 40, modal bg = 30 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <header className={'w-full z-20 bg-white fixed top-0 left-0'}>
            <ul className={'nav-bar'}>
              <Link className='nav-link' href='/'>home </Link>
              <Link className={'nav-link md:inline-flex hidden'}
                href='/carousel-demo'>carousels </Link>
              <Link className={'nav-link md:inline-flex hidden'} href='/component-demo'>components</Link>
              <Link className={'nav-link md:inline-flex hidden'} href='/pagination-demo'>pagination</Link>
              <SidebarButton className='md:hidden nav-burger mx-4'/>
            </ul>
          </header>
          <main>
            <div className='py-20'>
            </div>
            {children}
          </main>
          <footer className={'w-full px-6 py-4 bg-slate-300'}>
          </footer>
        </SidebarProvider>
      </body>
    </html>
  );
}


