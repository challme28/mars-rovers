import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {processInstructions} from './utils';

function App() {
  const [instructions, setInstructions] = useState<string>('');
  const [positions, setPositions] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = e.target;
    setInstructions(value);
  };

  const handleClickButton = () => {
    if (!instructions) {
      setPositions('Empty shopping basket');
      return;
    }
    setPositions(processInstructions(instructions).join('\n'));
  };

  return (
    <div className="App">
      <textarea
        className="instructions"
        rows={15}
        onChange={handleChange}
        value={instructions}
      />
      <button className="button" onClick={handleClickButton}>
        Generate receipt
      </button>
      <span className="result">{positions}</span>
    </div>
  );
}

export default App;
