import React from 'react';
import { Chart } from './vendors/BaseCamp/components'

import data from './data/sample-01'

import './App.css';

function App() {
  return (
    <Chart data={data} />
  );
}

export default App;
