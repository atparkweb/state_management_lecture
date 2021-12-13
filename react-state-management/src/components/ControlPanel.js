// This is a stateless component

import { useReducer } from "react";
import { initState } from "../store";
import actions from "../store/actions";
import { reducer } from "../store/reducers";

function ControlPanel({ msg }) {
  const [state, dispatch] = useReducer(reducer, initState());

  const handleAttack = () => {
    const damage = Math.round(Math.random() * 6);
    dispatch({ type: actions.ATTACK, payload: damage });
  }

  return (
    <div className="control-panel">
      <button className="button control-panel__button" onClick={handleAttack}>Attack</button>
      { msg ? <div className="control-panel__alert">{msg}</div> : null }
    </div>
  )
}

export default ControlPanel;
