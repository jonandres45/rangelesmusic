import React from 'react';
import './App.css';
import {ContextProvider} from '../Context';
import {AppUI} from './AppUI';

function App() {
  return (
    <ContextProvider>
      <AppUI/>
    </ContextProvider>
  );
}

export default App;
