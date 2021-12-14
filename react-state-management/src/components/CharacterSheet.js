import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { targetOn } from "../store/targetSlice";
import Attributes from "./Attributes";

function CharacterSheet({ character, showAttributes}) {
  const { id, name, race, jobClass, attributes, alignment, hitPoints } = character;

  const [isDead, setIsDead] = useState(false);

  const target = useSelector(state => state.target.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(targetOn(id));
  };

  useEffect(() => {
    if (hitPoints <= 0) {
      setIsDead(true);
    }
  }, [hitPoints]);

  return (
    <div className={isDead ? "char-sheet char-sheet__dead" : "char-sheet"} onClick={handleClick}>
      <header className={id === target ? "header header__target" : "header"}>
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
