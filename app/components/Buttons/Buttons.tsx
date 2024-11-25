import Link from 'next/link'
import React from 'react'

export function ShopButton() {
  return (
    <Link href='/products' className="bg-blue text-light p-2 rounded-md w-32 hover:scale-105 text-center transition-all">Shop Now</Link>
  )
}
