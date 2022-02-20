import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {processInstructions} from './instructions-processor';

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
    <main className="App">
      <section className="description">
        <h3>Please enter the instructions with the following requirements:</h3>
        <p className="description-instructions">
          The first line of input establishes the exploration grid bounds. The
          second line confirms the rover’s current position and heading. The
          third string consists of turn / move instructions.
        </p>
        <p>Example:</p>
        <p className="instructions-example">
          5 5{'\n'}1 2 N{'\n'}LMLMLMLMM
        </p>
      </section>
      <textarea
        className="instructions"
        rows={15}
        onChange={handleChange}
        value={instructions}
      />
      <button className="button" onClick={handleClickButton}>
        Process instructions
      </button>
      <span className="result">{positions}</span>
    </main>
  );
}

export default App;
