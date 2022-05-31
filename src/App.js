import React from 'react';
import { useColor } from './hooks/useColor';

import Header from './shared/header';
import CardButtons from './components/CardButtons';

const App = () => {
  const { initColor, handleChangeColor } = useColor('green');
  
  return (
      <div className='container-sm mx-auto mt-5'>
        <Header initColor={initColor} />
        <CardButtons handleChangeColor={handleChangeColor} />
      </div>
  );
}

export default App;
