import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { targetOn } from "../store/targetSlice";
import Attributes from "./Attributes";

function CharacterSheet({ character, showAttributes}) {
  const { id, name, race, klass, attrs, alignment, hp } = character;

  const [isDead, setIsDead] = useState(false);

  const target = useSelector(state => state.target.value);
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(targetOn(id));
  };

  useEffect(() => {
    if (hp <= 0) {
      setIsDead(true);
    }
  }, [hp]);
  
  return (
    <div className={isDead ? "char-sheet char-sheet__dead" : "char-sheet"} onClick={handleClick}>
      <header className={id === target ? "header header__target" : "header"}>
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
            {hp > 0
            ? <><abbr title="Health Points">HP</abbr>: {hp}</>
            : "💀"}
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

export default CharacterSheet;
