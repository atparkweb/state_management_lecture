import actions from "./actions";

const updateCharacterHP = (characters, id, amount) => {
  return characters.map(c => {
    if (c.id === id) {
      c.hp += amount
    }
    
    return c;
  });
};

const reducer = (state, action) => {
  let characters;

  switch(action.type) {
    case actions.ATTACK:
      const damage = -1 * action.payload;
      characters = updateCharacterHP([...state.characters], state.target, damage);
      return {
        ...state,
        characters
      };
    case actions.HEAL:
      characters = updateCharacterHP([...state.characters], state.target, action.payload);
      return {
        ...state,
        characters
      };
    case actions.TARGET_ON:
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
