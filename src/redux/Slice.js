import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addContact: {
      reducer: (state, action) => {state.contacts.push(action.payload)},
      prepare: contactData => {
        return { payload: { id: nanoid(), ...contactData } };
      },
    },
    deleteContact: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id !== action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
