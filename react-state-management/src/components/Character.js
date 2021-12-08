import Attributes from './Attributes'

function Character({ data }) {
  const { name, race, klass, attrs, alignment, background, level, hp } = data;

  return (
    <div className="profile-card">
      <header>
        <h1>{name}</h1>
        <ul>
          <li>{race}</li>
          <li>{klass} {level}</li>
          <li>{background}</li>
          <li>{alignment}</li>
        </ul>
      </header>
      <section className="profile-card-section">
        <h2>Attribtutes</h2>
        <Attributes attributes={attrs} />
      </section>
      <section className="profile-card-section">
        <h2>Status</h2>
        <ul>
          <li><abbr title="Health Points">HP</abbr>: {hp}</li>
        </ul>
      </section>
    </div>
  )
}

export default Character
