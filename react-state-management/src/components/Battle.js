import { useReducer } from "react";
import { reducer } from "../store/reducers";
import CharacterSheet from "./CharacterSheet";
import ControlPanel from "./ControlPanel";
import { initState } from "../store";

function Battle() {
  const [state, dispatch] = useReducer(reducer, initState());

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
              <CharacterSheet character={c} showAttributes={false} />
            </div>
          )
        })}
        </div>
        <ControlPanel />
      </main>
    </>
  )
}

export default Battle;
