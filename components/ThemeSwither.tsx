"use client";

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { Tabs, TabsList } from './ui/tabs';

function ThemeSwither() {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(()=> {
    setMounted(true);
  }, []);

  if(!mounted) return null;


  return (
    <Tabs>
      <TabsList></TabsList>
    </Tabs>
  )
}

export default ThemeSwither