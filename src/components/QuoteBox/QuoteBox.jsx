import React, { useEffect, useState } from 'react'
import cl from './quoteBox.module.css'
import QuoteText from '../QuoteText/QuoteText'
import QuoteAuthor from '../QuoteAuthor/QuoteAuthor'
import NewQuoteBtn from '../NewQuoteBtn/NewQuoteBtn'
import TwitBtn from '../TwitBtn/TwitBtn'
import axios from 'axios'

export default function QuoteBox() {
  const [quotesArr, setQuotesArr] = useState([]);
  const [currentQuote, setQuote] = useState({});

  async function fetchQuotes () {
    const response = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/');
    const qoutes = response.data.quotes;
    setQuotesArr(qoutes);
    const randomQuote = qoutes[(Math.floor(Math.random() * qoutes.length))];
    setQuote(randomQuote);
  }

  // идеальна структура
  useEffect(() => {
    fetchQuotes();
  }, [])

  const setNewQoute = (e) => {
    e.preventDefault();
    const randomQuote = quotesArr[(Math.floor(Math.random() * quotesArr.length))];
    setQuote(randomQuote)
  }

  useEffect(() => {
    fetchQuotes()
  }, [])
  

  return (
    <div className={cl.quoteBox} id="quote-box">
      <QuoteText quoteObj={currentQuote}/>
      <QuoteAuthor quoteObj={currentQuote}/>
      <div className={cl.buttonContainer}>
        <TwitBtn twitLink={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${currentQuote.quote}"–${currentQuote.author}`}/>
        <NewQuoteBtn clickFn={setNewQoute}/>
      </div>
    </div>
  )
}
