import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Scrollspy from '../components/Scrollspy';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export default function App({ Component, pageProps }) {
  return( 
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My Personal Portfolio"></meta>
        <title>Portfolio</title>
      </Head>  
      <main className={`${montserrat.variable} font-mont bg-dark w-full min-h-screen bg-[url("https://static.vecteezy.com/system/resources/previews/016/328/287/original/abstract-colorful-wave-flowing-isolated-background-design-free-png.png")] bg-no-repeat bg-[length:70%]`} style={{ backgroundPosition: '130% -450px' }}>
        <Navbar></Navbar>
        <Scrollspy sections={['Navigation','About', 'Projects', 'Articles']} />
        <div className='w-[80%] mx-auto'>
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}
