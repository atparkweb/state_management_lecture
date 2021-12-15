import { useState } from "react";
import { getCharacters } from "../data/characters";
import CharacterSheet from "./CharacterSheet";
import ControlPanel from "./ControlPanel";

function Battle() {
  const [characters, setCharacters] = useState(getCharacters());
  const [target, setTarget] = useState();

  const handleAttack = () => {
    if (target) {
      const newCharacters = characters.map(c => {
        if (c.id === target) {
          c.hp -= Math.round(Math.random() * 6);
        }
        
        return c;
      });
      
      setCharacters(newCharacters);
    } else {
      console.warn("No target selected");
    }
  };

  const handleClick = (id) => {
    console.log(id);
    setTarget(id);
  };

  return (
    <>
      <header className="battle-header">
        <h1 className="battle-header__heading">Battle Field</h1>
      </header>

      <main className="battle-main">
        <div className="layout" >
        {characters.map(c => {
          return (
            <div key={c.name} className="col">
              <CharacterSheet character={c} isTarget={c.id === target} onClick={handleClick} showAttributes={false} />
            </div>
          )
        })}
        </div>
        <ControlPanel onAttack={handleAttack} />
      </main>
    </>
  );
}

export default Battle;
