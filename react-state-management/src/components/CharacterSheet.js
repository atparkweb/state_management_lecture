import Attributes from './Attributes'

/* This is a state-less component */
function CharacterSheet({ character, withAttributes }) {
  const { name, race, klass, attrs, alignment, hp } = character;

  return (
    <div className="char-sheet">
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

      {withAttributes ? (
      <section className="char-sheet__section">
        <h2>Attributes</h2>
        <Attributes attributes={attrs} />
      </section>
      ) : null}
    </div>
  )
}

export default CharacterSheet
