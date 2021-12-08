import { useState } from "react";

function ControlPanel({ players, onAttack, miss }) {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0].id);

  const handleClick = (e) => {
    onAttack(selectedPlayer);
  };

  const handleChange = (e) => {
    setSelectedPlayer(parseInt(e.target.value));
  };

  return (
    <div className="control-panel">
      <select onChange={handleChange}>
        {players.map(p => {
          return <option key={p.id} value={p.id}>{p.name}</option>
        })}
      </select>
      <button onClick={handleClick} disabled={miss}>Attack</button>
      <div className="control-panel-alert">
        {miss ? <span>MISSED!</span> : null}
      </div>
    </div>
  )
}

export default ControlPanel;