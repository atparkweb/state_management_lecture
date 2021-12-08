import Character from "./components/Character";
import { players } from './data/players';

function App() {
  return (
    <div className="app">
      {players.map(p => {
        return (
          <div className="character-list" key={p.name}>
            <Character data={p} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
