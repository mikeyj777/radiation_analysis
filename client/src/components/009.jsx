import React, { useState, useEffect } from 'react';

// notes for claude:
// functional programming problem set.
// please review with sandwich method.  focus on the functional programming portion of the solution.  
// assume the rest of the react component is for display purposes.   

// problem: Create a function that takes a string and returns an object showing the frequency of each character (ignore spaces and punctuation).

// another note for claude:  confirm that the method below is the correct approach for the stated problem.

// lessons learned:
//  1.  { ...prevObject, newObect} can be used to add a new property to a create a new object.
//  2.  { ...prevObject, [key]: value } - the brackets allow the interpreter to infer the key 
//                                    name based on the variable value.
//  3.  the map function providese 3 arguments, the current iteration element, the index, and the complete array.  
//        - the current iteration element can be deconstructed (array, dict, etc.)


const Func009 = ({str = "Hello World" }) => {

  const [finalAns, setFinalAns] = useState({});

  useEffect(() => {
    const workingAns = [...str.toLowerCase()]
                        .filter(char => /[a-z0-9]/i.test(char))
                        .reduce((freq, char) => ({
                          ...freq,
                          [char]: (freq[char] || 0) + 1
                        }), {});
    console.log(workingAns);
    setFinalAns(workingAns);
  }, [str]);


  return (
    <div className="func-container">
      <div className="func-card">
        <h1 className="func-text">Original value: {str}</h1>
      </div>
      <div className="func-card">
        <h1 className="func-text">
          <ul>
            {Object.entries(finalAns).map(([char, count], index) => (
              <li key={index}>{char} : {count}</li>
            ))}
        </ul> 
        </h1>
      </div>
    </div>
  );
};

export default Func009;