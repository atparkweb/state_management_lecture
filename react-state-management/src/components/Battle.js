import { useState } from "react";
import { getCharacters } from "../data/characters";
import CharacterSheet from "./CharacterSheet";

function Battle() {
  const [targetId, setTargetId] = useState(1);
  const [characters, setCharacters] = useState(getCharacters());

  return (
    <>
      <header className="battle-header">
        <h1 class="battler-header__heading">Battle Field</h1>
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