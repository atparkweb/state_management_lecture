import { useState } from "react";
import { getCharacters } from "../data/characters";
import ControlPanel from "./ControlPanel";
import CharacterSheet from "./CharacterSheet";

function Battle() {
  const [miss, setMiss] = useState(false);
  const [targetId, setTargetId] = useState(1);
  const [characters, setCharacters] = useState(getCharacters());

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
    <>
      <header className="battle-header">
        <ControlPanel characters={characters} onAttack={handleAttack} miss={miss} />
      </header>

      <main className="battle-main">
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
    </>
  )
}

export default Battle;