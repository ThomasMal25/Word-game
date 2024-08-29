import { useState } from 'react';
import Synonyms from './assets/synonym';
import './App.css';
import './game.css';

function App() {
  const [word, setWord] = useState('');
  const [track, setTrack] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSubmit = (item) => {
    if (word === item) {
      setTotal((prev) => (prev += 1));
    } else {
      null;
    }
    if (word === '') {
      setTrack((prev) => prev);
      alert('Please pick an option');
    } else {
      setTrack((prev) => (prev += 1));
    }
    // This if statement is so they have to click an option to go to the next question
  };

  const selected = (opt) => {
    setWord(opt);
  };

  return (
    <>
      <h1>WORD GAME</h1>
      {Synonyms.map(
        (item, index) =>
          track === index && (
            <div className="main" key={index}>
              <h1>Please click on the correct synonym:</h1>
              <h3>Your Word: {item.word.toUpperCase()}</h3>
              {item.options && item.options.length > 0 ? (
                <ul>
                  {item.options.map((opt, index) => (
                    <li
                      onClick={() => selected(opt)}
                      key={index}
                      className={opt === word ? 'clicked' : ''}
                    >
                      {opt.toUpperCase()}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No options available</p>
              )}
              <button onClick={() => handleSubmit(item.correct)}>Next</button>
            </div>
          )
      )}
      {track >= Synonyms.length && (
        <div className="main">
          <h1 className={total >= 5 ? 'green' : 'red'}>
            Your total score:
            {total}/{Synonyms.length}
          </h1>
        </div>
      )}
    </>
  );
}

export default App;
