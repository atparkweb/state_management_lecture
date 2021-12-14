import { useSelector } from "react-redux";
import CharacterSheet from "./CharacterSheet";
import ControlPanel from "./ControlPanel";

function Battle() {
  const characters = useSelector(state => state.characters.value);

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
              <CharacterSheet character={c} showAttributes={false} />
            </div>
          )
        })}
        </div>
        <ControlPanel />
      </main>
    </>
  );
}

export default Battle;
