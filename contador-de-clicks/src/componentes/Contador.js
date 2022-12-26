import React from 'react';
import '../steelsheets/Contador.css';

function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );   
}

export default Contador;