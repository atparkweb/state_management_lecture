import Attributes from './Attributes'
import Status from './Status'

function Character(character) {
  const { name, race, klass, attrs, hp } = character;
  return (
    <div className="profile-card">
      <header>
        <h1>{name}</h1>
        <h2>{race}, {klass}</h2>
      </header>
      <section>
        <Attributes attrs={attrs} />
      </section>
      <section>
        <Status hp={hp} />
      </section>
    </div>
  )
}

export default Character
