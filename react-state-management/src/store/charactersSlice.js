import { createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../data/characters';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: getCharacters()
  },
  reducers: {
    attack: (state, action) => {
      state.value = state.value.map(character => {
        if (character.id === action.payload) {
          character.hitPoints -= Math.round(Math.random() * 6);
        }

        return character;
      });
    },
    heal: (state, action) => { // TODO: demonstrate action creators
      state.value = state.value.map(character => {
        if (character.id === action.payload) {
          character.hitPoints += Math.round(Math.random() * 6);
        }

        return character;
      });
    }
  }
});

export const { attack, heal } = charactersSlice.actions;

export default charactersSlice.reducer;
