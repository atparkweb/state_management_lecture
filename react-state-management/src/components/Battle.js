import { useState } from "react";
import { getCharacters } from "../data/characters";
import CharacterSheet from "./CharacterSheet";

function Battle() {
  const [characters, setCharacters] = useState(getCharacters());

  const handleAttack = (id) => {
    const newCharacters = characters.map(c => {
      if (c.id === id) {
	c.hp -= Math.round(Math.random() * 6);
      }
      
      return c;
    });
    
    setCharacters(newCharacters);
  };

  return (
    <>
      <header className="battle-header">
        <h1 className="battler-header__heading">Battle Field</h1>
      </header>

      <main className="battle-main">
        <div className="layout" >
        {characters.map(c => {
          return (
            <div key={c.name} className="col">
              <CharacterSheet character={c} onAttack={handleAttack} />
            </div>
          )
        })}
        </div>
      </main>
    </>
  )
}

export default Battle;
