import { useDispatch, useSelector } from "react-redux";
import { attack } from "../store/charactersSlice";
import { targetOn } from "../store/targetSlice";
import CharacterSheet from "./CharacterSheet";
import ControlPanel from "./ControlPanel";

function Battle() {
  const characters = useSelector(state => state.characters.value);
  const target = useSelector(state => state.target.value);

  const dispatch = useDispatch();

  const handleAttack = () => {
    if (target) {
      dispatch(attack(target));
    } else {
      console.warn("No target selected");
    }
  };

  const handleClick = (id) => {
    dispatch(targetOn(id));
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
  )
}

export default Battle;
