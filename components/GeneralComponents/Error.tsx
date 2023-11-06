import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Error({children}: Props) {
  return (
    <div className='text-center text-4xl text-accent my-[60px]'>{children}</div>
  )
}
