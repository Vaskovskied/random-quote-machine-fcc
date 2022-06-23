import React from 'react'
import cl from './quoteText.module.css'
export default function QuoteText({quoteObj, ...props}) {
  return (
    <p id='text' className={cl.quoteText}>{quoteObj.quote}</p>
  )
}
