import { useState } from "react";

function ControlPanel({ characters, onAttack, miss }) {
  const [target, setTarget] = useState(characters[0].id);

  const handleClick = (e) => {
    onAttack(target);
  };

  const handleChange = (e) => {
    setTarget(parseInt(e.target.value));
  };

  return (
    <div className="control-panel">
      <select onChange={handleChange}>
        {characters.map(c => {
          return <option key={c.id} value={c.id}>{c.name}</option>
        })}
      </select>

      {miss
         ? <div className="control-panel-alert">MISSED!</div>
         : <button onClick={handleClick} disabled={miss}>Attack</button>
      }
    </div>
  )
}

export default ControlPanel;