import React from 'react'
import { Icons } from './Icons'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
  return (
    <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <Icons.logo className='mx-auto h-6 w-6 '/>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className='text-sm max-w-xs mx-auto'>
          By continuing, you are setting up a Talk_It! account and agree to our User agreement and Privacy Policy.
        </p>
        <UserAuthForm/>
        <p className='px-8 text-sm text-zinc-700 text-center'>
          New to Talk_it? {''}
          <Link href='/sign-up' className='hover:text-zinc-800 text-sm underline underline-offset-4'>Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
