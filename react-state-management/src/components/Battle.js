import { useState } from "react";
import { getCharacters } from "../data/characters";
import CharacterSheet from "./CharacterSheet";
import ControlPanel from "./ControlPanel";

function Battle() {
  const [characters, setCharacters] = useState(getCharacters());
  const [target, setTarget] = useState();

  const handleAttack = () => {
    if (target) {
      const newCharacters = characters.map(character => {
        if (character.id === target) {
          character.hitPoints -= Math.round(Math.random() * 6);
        }

        return character;
      });

      setCharacters(newCharacters);
    } else {
      console.warn("No target selected");
    }
  };

  const handleClick = (id) => {
    setTarget(id);
  };

  return (
    <>
      <header className="battle-header">
        <h1 className="battle-header__heading">Battle Field</h1>
      </header>

      <main className="battle-main">
        <div className="layout" >
        {characters.map(character => {
          return (
            <div key={character.name} className="col">
              <CharacterSheet character={character} isTarget={character.id === target} onClick={handleClick} showAttributes={false} />
            </div>
          );
        })}
        </div>
        <ControlPanel onAttack={handleAttack} />
      </main>
    </>
  );
}

export default Battle;
