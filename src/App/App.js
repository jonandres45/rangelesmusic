import React from 'react';
import './App.css';
import {ContextProvider} from '../Context';
import {AppUI} from './AppUI';
import { Load } from '../Load';

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
    const loading = ()=>{
      setLoading(false);
    }
    loading();
  }, []);

  return (
    <ContextProvider>
      {loading ? (
        <Load/>
      ) : <AppUI/>}      
    </ContextProvider>
  );
}

export default App;
