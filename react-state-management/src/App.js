import { useState } from "react";
import CharacterSheet from "./components/CharacterSheet";
import ControlPanel from "./components/ControlPanel";
import { getPlayers } from './data/players';

function App() {
  const [playerList, setPlayerList] = useState(getPlayers());
  const [miss, setMiss] = useState(false);

  const handleAttack = (playerId) => {
    const newList = playerList.map(p => {
      if (p.id === playerId) {
        const damage = Math.round(Math.random());

        if (damage === 0) {
          setMiss(true);
          setTimeout(() => setMiss(false), 500);
        } else {
          p.hp -= damage;
        }
      }
      return p;
    });

    setPlayerList(newList);
  };

  const handleRemove = (player) => {
    // TODO: Implement
  };

  return (
    <div className="app">
      <header className="app-header">
        <ControlPanel players={playerList} onAttack={handleAttack} onRemove={handleRemove} miss={miss} />
      </header>

      <main className="app-main">
        {playerList.map(p => {
          return (
            <div className="character-list" key={p.name}>
              <CharacterSheet character={p} />
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
