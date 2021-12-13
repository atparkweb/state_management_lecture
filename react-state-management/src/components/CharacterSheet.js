import { useEffect, useState } from 'react';
import Attributes from './Attributes';

function CharacterSheet({ character, isTarget, onClick, showAttributes}) {
  
  /* Getting character from props instead of state */
  const { id, name, race, klass, attrs, alignment, hp } = character;
  
  /* This is local state for the component display only */
  const [isDead, setIsDead] = useState(false);
  
  useEffect(() => {
    if (hp <= 0) {
      setIsDead(true);
    }
  }, [hp]);
  
  return (
    <div className={ isDead ? "char-sheet char-sheet__dead" : "char-sheet" } onClick={() => onClick(id)}>
      <header className={ isTarget ? "header__target" : "" }>
        <h1>{name}</h1>
        <div className={`char-sheet__icon ${klass.toLowerCase()}`}></div>
        <ul>
          <li>{race} {klass}</li>
          <li><span className="alignment">{alignment}</span></li>
        </ul>
      </header>

      <section className="char-sheet__section">
        <h2>Status</h2>
        <ul>
          <li>
            { hp > 0
            ? <><abbr title="Health Points">HP</abbr>: {hp}</>
            : "💀" }
          </li>
        </ul>
      </section>

      {showAttributes ? (
      <section className="char-sheet__section">
        <h2>Attributes</h2>
        <Attributes attributes={attrs} />
      </section>
      ) : null}
    </div>
  )
}

export default CharacterSheet
