'use client'
import React from 'react'

const counter = ({children}: {children: React.ReactNode}) => {
  const [count, setCount] = React.useState<number>(0);
  const increment = () => setCount(prev => prev + 1);
  return (
    <>
      <h1>Count: {count}</h1>
      <button
        onClick={increment}
        className='px-2 py-1 rounded-lg text-white bg-blue-500'
      >
        Increment
      </button>
      {children}
    </>
  )
}

export default counter