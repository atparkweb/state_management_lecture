import Attributes from './Attributes'

/* This is a state-less component */
function CharacterSheet({ character }) {
  const { name, race, klass, attrs, alignment, level, hp } = character;

  return (
    <div className="char-sheet">
      <header>
        <h1>{name}</h1>
        <ul>
          <li>{race}</li>
          <li>{klass} {level}</li>
          <li>{alignment}</li>
        </ul>
      </header>

      <section className="char-sheet__section">
        <h2>Status</h2>
        <ul>
          <li><abbr title="Health Points">HP</abbr>: {hp}</li>
        </ul>
      </section>

      <section className="char-sheet__section">
        <h2>Attributes</h2>
        <Attributes attributes={attrs} />
      </section>
    </div>
  )
}

export default CharacterSheet
