import { useState } from "react";
import { getCharacters } from "./data/characters";
import ControlPanel from "./ControlPanel";
import CharacterSheet from "./CharacterSheet";

function Battle() {
  const [miss, setMiss] = useState(false);
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
      <header className="control-header">
      </header>

      <main className="control-main">
        <div className="layout" >
        </div>
      </main>
    </>
  )
}

export default Battle;
