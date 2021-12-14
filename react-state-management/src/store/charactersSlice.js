import { createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../data/characters';

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    value: getCharacters()
  },
  reducers: {
    attack: (state, action) => {
      state.value = state.value.map(c => {
        if (c.id === action.payload) {
          c.hp -= Math.round(Math.random() * 6);
        }
        
        return c;
      });
    },
    heal: (state, action) => { // TODO: demonstrate action creators
      state.value = state.value.map(c => {
        if (c.id === action.payload) {
          c.hp += Math.round(Math.random() * 6);
        }
        
        return c;
      });
    }
  }
});

export const { attack, heal } = charactersSlice.actions;

export default charactersSlice.reducer;
