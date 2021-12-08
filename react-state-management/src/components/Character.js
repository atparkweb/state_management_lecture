import Attributes from './Attributes'
import Status from './Status'

function Character({ data }) {
  const { name, race, klass, attrs, hp, level, status } = data;

  return (
    <div className="profile-card">
      <header>
        <h1>{name}</h1>
        <ul>
          <li>{race}</li>
          <li>Level {level} {klass}</li>
        </ul>
      </header>
      <section>
        <Attributes attrs={attrs} />
      </section>
      <section>
        <Status hp={hp} status={status} />
      </section>
    </div>
  )
}

export default Character
