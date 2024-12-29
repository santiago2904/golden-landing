import React from 'react'

export default function DecorativeCircles({ position = 'top' }: { position?: 'top' | 'bottom' }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {position === 'top' && (
        <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full border-[30px] border-[#FE9A00] opacity-10"></div>
      )}
      {position === 'bottom' && (
        <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full border-[30px] border-[#FE9A00] opacity-10"></div>
      )}
    </div>
  )
}