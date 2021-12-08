import { useState } from "react";

function ControlPanel({ players, onAttack }) {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleClick = (e) => {
    if (selectedPlayer !== null) {
      onAttack(selectedPlayer);
    }
  };

  const handleChange = (e) => {
    const selected = e.target.value;
    console.log(e);
    setSelectedPlayer(players[selected]);
  };

  return (
    <div className="control-panel">
      <select onChange={handleChange}>
        {players.map(p => {
          return <option key={p.id} value="p.id">{p.name}</option>
        })}
      </select>
      <button onClick={handleClick}>Attack</button>
    </div>
  )
}

export default ControlPanel;