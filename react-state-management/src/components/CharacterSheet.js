import { useEffect, useState, useReducer } from 'react';
import { initState } from '../store';
import actions from '../store/actions';
import { reducer } from '../store/reducers';
import Attributes from './Attributes';

function CharacterSheet({ character, showAttributes}) {
  const [state, dispatch] = useReducer(reducer, initState());
  
  /* Getting character from props instead of state */
  const { id, name, race, klass, attrs, alignment, hp } = character;
  
  /* This is local state for the component display only */
  const [isDead, setIsDead] = useState(false);
  
  useEffect(() => {
    if (hp <= 0) {
      setIsDead(true);
    }
  }, [hp]);

  const handleClick = () => {
    dispatch({ type: actions.TARGET_ON, payload: id })
  };

  return (
    <div className={ isDead ? "char-sheet char-sheet__dead" : "char-sheet" } onClick={handleClick}>
      <header className={ state.target === id ? "header header__target" : "header" }>
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
