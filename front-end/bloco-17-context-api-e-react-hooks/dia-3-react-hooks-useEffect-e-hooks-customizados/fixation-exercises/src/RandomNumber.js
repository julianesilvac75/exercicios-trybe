import React, { useState, useEffect } from 'react';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const id = setInterval(() => {
      const number = Math.round(Math.random() * 100)
        setRandomNumber(number);
        console.log('interval');
        }, 10000);
    
      return () => clearInterval(id);
    }, []);
    
    useEffect(() => {
      if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
        setMessage('Acerto');
      }
      setTimeout(() => {
        setMessage('');
      }, 4000)
    }, [randomNumber]);
    
    useEffect(() => {}, []);
    
  return <div>
    <p>Random number: <span>{randomNumber}</span></p>
    <p>{message}</p>
  </div>;
}

export default RandomNumber;
