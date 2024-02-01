import React from 'react'
import Box from './Componentes/box'
import Button from './Componentes/button'
import { useEffect,useState } from 'react'
const App = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        setQuoteData({
          content: data.content,
          author: data.author,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 
  const refreshQuote = () => {
    fetchData(); // Call the function to fetch a new quote
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuoteData({
        content: data.content,
        author: data.author,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className='app'>
      <Box quoteData={quoteData}/>
      <Button onClick={refreshQuote}/>
    </div>
  )
}

export default App