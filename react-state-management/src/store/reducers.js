import actions from "./actions";

const updateCharacterHP = (characters, id, amount) => {
  return characters.map(c => {
    if (c.id === id) {
      c.hp += amount
    } else {
      console.log(c.id, id);
    }
    
    return c;
  });
};

const reducer = (state, action) => {
  let characters;

  switch(action.type) {
    case actions.ATTACK:
      console.log("ATTACK", action.payload);
      const damage = -1 * action.payload;
      characters = updateCharacterHP([...state.characters], state.target, damage);
      return {
        ...state,
        characters
      };
    case actions.HEAL:
      console.log("HEAL", action.payload);
      characters = updateCharacterHP([...state.characters], state.target, action.payload);
      return {
        ...state,
        characters
      };
    case actions.TARGET_ON:
      console.log("TARGET ON: ", action.payload);
      let target = action.payload;
      return {
        ...state,
        target
      };
    default:
      return state;
  }
};

export { reducer }
