import Link from 'next/link'
import Logo from '@/components/Logo'
import React from 'react'

const Navbar = () => {
  return (
    <header
    id='Navigation'
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav className='flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/articles">Articles</Link>
        </nav>
        
        <nav>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
        </nav>
        <div className='absolute left-[50%] translate-x-[-50%] top-2'>
            <Logo />
        </div>
    </header>
  )
}

export default Navbar