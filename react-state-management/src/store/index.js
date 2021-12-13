import { getCharacters } from "../data/characters";

const initState = () => {
  const characters = getCharacters();
  return {
    characters,
    target: null
  };
};


export { initState };