import { useState } from 'react';

import {Header,Footer,} from './components/index';
import { AllRoutes } from './routes/AllRoutes';

import './App.css';

function App() {

  const [count,setCount] = useState(0);

  return (
    <div className="App">
      <Header count={count} setCount={setCount}/>
      <AllRoutes count={count} setCount={setCount} />
      <Footer />
    </div>
  );
}

export default App;
