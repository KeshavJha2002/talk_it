"use client"

import React,{useState} from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { Icons } from './Icons'
import { useToast } from '@/hooks/use-toast'

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm : React.FC<Props> = ({className, ...props}) => {
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try{ 
      await signIn('google')
    }catch(err){
      toast({
        title: "There was a problem",
        description: "There was an error logging in with google",
        variant: 'destructive'
      })
    }finally{
      setIsLoading(false);
    }
  };  

  return (
    <div className={cn('flex justify-center items-center w-full', className)}>
      <Button size='sm' className='w-full' onClick={loginWithGoogle} isLoading={isLoading}>
        {isLoading?null:<Icons.google className='h-4 w-4 mr-2'/>}Google
      </Button>
    </div>
  )
}

export default UserAuthForm