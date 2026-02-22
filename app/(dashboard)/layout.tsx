import ThemeSwither from '@/components/ThemeSwither'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex flex-col min-w-full min-h-screen bg-background max-h-screen'>
      <nav>
        <Logo/>
        <ThemeSwither/>
        <UserButton /> 
      </nav>
      <main className='flex w-full grow'>{children}</main>
      </div>
  )
}

export default Layout