import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.

// problem: Write a function that takes an array of objects 
// with a 'price' property and returns the total cost.

class Good {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const Func004 = () => {
  
  const generateGoods = () => {
    const goods = [];
    for (let i = 0; i < 10; i++) {
      goods.push(new Good("Good " + i, Math.floor(Math.random() * 100)));
    }
    return goods;
  };
  
  const [goods, setGoods] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setGoods(generateGoods());
  }, []);

  useEffect(() => {
    setTotalCost(goods.reduce((total, good) => total + good.price, 0));
  }, [goods]);

  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original array: {goods.map(good => good.price).join(', ')}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">Final answer: {totalCost}</h1>
      </div>
    </div>
  );
};

export default Func004;