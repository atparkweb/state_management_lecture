import { useEffect, useState } from 'react';
import Attributes from './Attributes';

/* This is a state-less component */
function CharacterSheet({ character, onAttack, showAttributes  }) {
  
  /* Getting character from props instead of state */
  const { name, race, klass, attrs, alignment, hp } = character;
  
  const [isDead, setIsDead] = useState(false);
  
  useEffect(() => {
    if (hp <= 0) {
      setIsDead(true);
    }
  }, [hp]);
  
  const handleClick = (e) => {
    onAttack(character.id)
  };

  return (
    <div className={ isDead ? "char-sheet char-sheet__dead" : "char-sheet" }>
      <header>
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
      <footer className="char-sheet__controls">
        {hp > 0 ? <button className="button button__attack" onClick={handleClick}>Attack</button> : null}
      </footer>
    </div>
  )
}

export default CharacterSheet
