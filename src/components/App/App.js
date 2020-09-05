import React from 'react';
import { Title } from '../Title/Title';
import { Card } from '../Card/Card';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Title />
      <div className='card-wrapper'>
        <Card />
      </div>
    </div>
  );
}

export default App;
