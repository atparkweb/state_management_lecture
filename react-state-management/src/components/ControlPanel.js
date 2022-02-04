// This is a stateless component

function ControlPanel({ onAttack, msg }) {
  return (
    <div className="control-panel">
      <button className="button control-panel__button" onClick={onAttack}>Attack</button>
      { msg ? <div className="control-panel__alert">{msg}</div> : null }
    </div>
  );
}

export default ControlPanel;
