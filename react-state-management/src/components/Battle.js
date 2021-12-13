import { useReducer } from "react";
import { reducer } from "../store/reducers";
import CharacterSheet from "./CharacterSheet";
import ControlPanel from "./ControlPanel";
import { initState } from "../store";
import actions from "../store/actions";

function Battle() {
  const [state, dispatch] = useReducer(reducer, initState());

  const handleClick = (id) => {
    dispatch({ type: actions.TARGET_ON, payload: id });
  };

  const handleAttack = () => {
    const damage = Math.round(Math.random() * 6);
    dispatch({ type: actions.ATTACK, payload: damage });
  };

  return (
    <>
      <header className="battle-header">
        <h1 className="battle-header__heading">Battle Field</h1>
      </header>

      <main className="battle-main">
        <div className="layout" >
        {state.characters.map(c => {
          return (
            <div key={c.name} className="col">
              <CharacterSheet character={c} target={state.target} onClick={handleClick} showAttributes={false} />
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
