import React, { useState, useEffect } from 'react';

export default function App() {
  // Check if there is a value stored in localStorage for 'counter'
  const storedCounter = localStorage.getItem('counter');
  const initialCounter = storedCounter ? parseInt(storedCounter, 10) : 1;

  const [value, setValue] = useState(initialCounter);

  const addValue = () => {
    if(value < 10){
    setValue(value + 1);
    }
  };

  const removeValue = () => {
    if(value > 0){
    setValue(value - 1);
    }
  };

  // useEffect to update localStorage whenever the 'value' changes
  useEffect(() => {
    localStorage.setItem('counter', value.toString());
  }, [value]);

  return (
    <>
      <div>Counter value: {value}</div>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
