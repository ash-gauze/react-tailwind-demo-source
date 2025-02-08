import './globals.css';

import Head from 'next/head'

export default function Home() {
  
  return (
    <>
      <Head>
      <link rel="icon" href="/window.svg" />
      <title>The title is different on this page</title>
        <meta 
        name='the name of the meta object'
        content='check out this cool content on the other page.'
        key='this is the description key'
      />
</Head>
<p>
Welcome to my webpage. This is built with React TailwindCSS and NextJS. Currently all of the components are built from scratch using tutorials and official documentation for reference. 

</p>
  </>
  );
}
