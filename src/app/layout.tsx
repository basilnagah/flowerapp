'use client'
import Navbar from "@/components/common/navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import UserProvider from "@/context/user.context";
import Footer from "@/components/common/Footer";
import { Toaster } from "react-hot-toast";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [queryClient] = useState(() => new QueryClient())


  return <html>
    <body>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Navbar />
            <Toaster  position="top-right" reverseOrder={false}/>
            {children}
            <Footer/>
          </UserProvider>
        </QueryClientProvider>
      </SessionProvider>

    </body>
  </html>
}
