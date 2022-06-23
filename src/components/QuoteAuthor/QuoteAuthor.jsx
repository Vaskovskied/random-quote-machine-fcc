import React from 'react'
import cl from './quoteAuthor.module.css'
export default function QuoteAuthor({quoteObj}) {
  return (
    <p id='author' className={cl.quoteAuthor}>—{quoteObj.author}</p>
  )
}
