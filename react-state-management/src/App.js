import { useState } from "react";
import Character from "./components/Character";
import ControlPanel from "./components/ControlPanel";
import { getPlayers } from './data/players';

function App() {
  const [playerList, setPlayerList] = useState(getPlayers());

  const handleAttack = (player) => {
    // TODO: Implement
  };

  const handleRemove = (player) => {
    // TODO: Implement
  };

  return (
    <div className="app">
      <header className="app-header">
        <ControlPanel players={playerList} onAttack={handleAttack} onRemove={handleRemove} />
      </header>

      <main className="app-main">
        {playerList.map(p => {
          return (
            <div className="character-list" key={p.name}>
              <Character data={p} />
            </div>
          )
        })}
      </main>
    </div>
  );
}

export default App;
