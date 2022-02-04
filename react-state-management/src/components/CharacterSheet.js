import { useEffect, useState } from "react";
import Attributes from "./Attributes";

function CharacterSheet({ character, isTarget, onClick, showAttributes}) {

  /* Getting character from props instead of state */
  const { id, name, race, jobClass, attributes, alignment, hitPoints } = character;

  /* This is local state for the component display only */
  const [isDead, setIsDead] = useState(false);

  useEffect(() => {
    if (hitPoints <= 0) {
      setIsDead(true);
    }
  }, [hitPoints]);

  return (
    <div className={isDead ? "char-sheet char-sheet__dead" : "char-sheet" } onClick={() => onClick(id)}>
      <header className={isTarget ? "header header__target" : "header"}>
        <h1>{name}</h1>
        <div className={`char-sheet__icon ${jobClass.toLowerCase()}`}></div>
        <ul>
          <li>{race} {jobClass}</li>
          <li><span className="alignment">{alignment}</span></li>
        </ul>
      </header>

      <section className="char-sheet__section">
        <h2>Status</h2>
        <ul>
          <li>
            {hitPoints > 0
            ? <><abbr title="Health Points">HP</abbr>: {hitPoints}</>
            : "💀"}
          </li>
        </ul>
      </section>

      {showAttributes ? (
      <section className="char-sheet__section">
        <h2>Attributes</h2>
        <Attributes attributes={attributes} />
      </section>
      ) : null}
    </div>
  );
}

export default CharacterSheet;
