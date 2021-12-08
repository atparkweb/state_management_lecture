function Status({ hp, status }) {

  return (
    <div className="status-card">
      <abbr title="Health Points">HP</abbr>: {hp}
      <section>
        <h3>Bonuses</h3>
        {status.bonuses.map(b => {
          return (
            <>
              <dt>b.title</dt>
              <dd>b.value</dd>
            </>
          )
        })}
      </section>
      <section>
        <h3>Penalties</h3>
        {status.penalties.map(p => {
          return (
            <>
              <dt>p.title</dt>
              <dd>p.value</dd>
            </>
          )
        })}
      </section>
    </div>
  );
}

export default Status;