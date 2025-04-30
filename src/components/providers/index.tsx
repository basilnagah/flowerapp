import React from 'react'
import NextAuthProvider from './components/next-auth-providers'

type ProviderProps={
    children: React.ReactNode
}

export default function Providers({children}:ProviderProps) {
  return (
    <NextAuthProvider>
        {children}
    </NextAuthProvider>

)
}
