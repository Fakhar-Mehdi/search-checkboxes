import React from 'react';
import './App.css';
import { cricketers } from './data/cricketers';
import "tailwindcss";

function App() {
  return (
    <div className="App">
     {cricketers.map(c=>(<div className='bg-red-500' key={c}>{c}</div>))}
    </div>
  );
}

export default App;
