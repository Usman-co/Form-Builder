import Logo from '@/components/Logo'
import ThemeSwither from '@/components/ThemeSwither'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-w-full min-h-screen bg-background max-h-screen'>
      <nav className='flex justify-between border-b border-border h-[60] items-center px-4 py-2'>
        <Logo/>
        <div className='flex gap-4 items-center'>
        <ThemeSwither/>
        <UserButton /> 
        </div>
      </nav>
      <main className='flex w-full grow'>{children}</main>
      </div>
  )
}

export default Layout