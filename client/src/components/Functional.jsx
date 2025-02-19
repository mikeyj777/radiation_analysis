import React, { useState, useEffect } from 'react';

const Functional = () => {
  const [phrase, setPhrase] = useState('Loading...');

  useEffect(() => {
    const randomPhrase = 'Welcome to the coolest React app ever!';
    setPhrase(randomPhrase);
  }, []);

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">{phrase}</h1>
      </div>
    </div>
  );
};

export default Functional;