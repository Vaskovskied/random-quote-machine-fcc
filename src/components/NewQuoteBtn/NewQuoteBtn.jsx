import React from 'react'
import cl from './newQuoteBtn.module.css'

export default function NewQuoteBtn({clickFn, ...props}) {
  return (
    <button
    onClick={clickFn}
    className={cl.newQuoteBtn} 
    id="new-quote">New qoute</button>
  )
}
