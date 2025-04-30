'use client'
import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {


  return <>
    <main>ERROR! {error.message}</main>
    <button onClick={() => reset()}>Try again</button>
  </>
}
