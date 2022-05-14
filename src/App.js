import React from 'react';
import { Counter } from './features/counter/Counter';
import './app.style.css'

function App() {
  return (
    <div className='app'>
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
