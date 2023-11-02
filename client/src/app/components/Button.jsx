'use client'

import React from 'react'

function Button({btnText, color}) {
    
  return (
    <button className='py-2 px-3 rounded-md text-white font-bold bg-slate-800 hover:bg-slate-500'>{btnText}</button>
  )
}

export default Button