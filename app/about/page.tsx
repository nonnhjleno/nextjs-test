import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <div className="flex flex-col items-center">
      <Link href="/" className="underline">
        Home
      </Link>
      <h1 className="text-2xl">About</h1>
    </div>
  )
}

export default about