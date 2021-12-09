import { useState } from "react";
import CharacterSheet from "./components/CharacterSheet";
import ControlPanel from "./components/ControlPanel";
import { getCharacters } from './data/characters';

function App() {
  const [characters, setCharacters] = useState(getCharacters());
  const [miss, setMiss] = useState(false);
  const [targetId, setTargetId] = useState(1);

  const handleAttack = (targetId) => {
    setTargetId(targetId);
    const newCharacters = characters.map(c => {
      if (c.id === targetId) {
        const damage = Math.round(Math.random());

        if (damage === 0) {
          setMiss(true);
          setTimeout(() => setMiss(false), 500);
        } else {
          c.hp -= damage;
        }
      }
      return c;
    });

    setCharacters(newCharacters);
  };

  return (
    <div className="app">
      <header className="app-header">
        <ControlPanel characters={characters} onAttack={handleAttack} miss={miss} />
      </header>

      <main className="app-main">
        <div className="layout" >
        {characters.map(c => {
          return (
            <div key={c.name} className="col">
              <CharacterSheet character={c} target={targetId} />
            </div>
          )
        })}
        </div>
      </main>
    </div>
  );
}

export default App;
