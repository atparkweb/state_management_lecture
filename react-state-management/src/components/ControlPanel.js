import { useDispatch, useSelector } from "react-redux";
import { attack } from "../store/charactersSlice";

// This is a stateless component
function ControlPanel() {
  const target = useSelector(state => state.target.value);
  const dispatch = useDispatch();

  const handleAttack = () => {
    if (target) {
      dispatch(attack(target));
    } else {
      console.warn("No target selected");
    }
  };

  return (
    <div className="control-panel">
      <button className="button control-panel__button" onClick={handleAttack}>Attack</button>
    </div>
  );
}

export default ControlPanel;
