import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contact) {
        return { payload: { id: nanoid(), ...contact } };
      }
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    editContact(state, action) {
      const { id, updatedContact } = action.payload;
      const index = state.findIndex(c => c.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedContact };
      }
    }
  }
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
