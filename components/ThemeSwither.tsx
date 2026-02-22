"use client";

import { useTheme } from 'next-themes';
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { SunIcon,MoonIcon,DesktopIcon } from '@radix-ui/react-icons';


function ThemeSwither() {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(()=> {
    setMounted(true);
  }, []);

  if(!mounted) return null; // avoid rehydration error


  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger onClick={() => setTheme("light")} value="light">
          <SunIcon className='w-[1.2rem] h-[1.2rem]' />
        </TabsTrigger>
        <TabsTrigger onClick={() => setTheme("dark")} value="dark">
          <MoonIcon className='w-[1.2rem] h-[1.2rem] rotate-90 transition-all dark:rotate-0' />
        </TabsTrigger>
        <TabsTrigger onClick={() => setTheme("system")} value="system">
          <DesktopIcon className='w-[1.2rem] h-[1.2rem]' />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default ThemeSwither