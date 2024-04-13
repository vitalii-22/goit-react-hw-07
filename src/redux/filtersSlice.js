import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = state => state.filters.name;
export const { changeFilter } = filtersSlice.actions;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  }
);
export const filtersSliceReducer = filtersSlice.reducer;
