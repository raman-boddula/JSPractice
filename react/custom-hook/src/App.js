
import './App.css';
import useCustomHook from './compoments/custom-hook';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useCustomHook(count);
  return (
    <>
      <h1>Custom Hook</h1> 
      <p>Count : {count }</p>
      <button onClick={()=>setCount(count+1)}>Increase Count</button>
    </>
  );
}

export default App;
