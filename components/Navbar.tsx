import React from 'react';
import Link from 'next/link';
import { Icons } from './Icons'; 
import { buttonVariants } from './ui/Button';

const Navbar = async () => {
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-zinc-100 border-zinc-300 border-b py-2 z-[10]'>
      <div className='container max-w-7xl h-full flex mx-auto justify-between items-center gap-2'>
        <Link href='/' className='flex gap-2 items-center'>
          <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6'/>
          <p className='hidden text-zinc-700 font-medium text-sm md:block'>Talk_it!</p>
        </Link>
        <Link href='/sign-in' className={buttonVariants()}>SignIn</Link>
      </div>
    </div>
  )
}

export default Navbar
