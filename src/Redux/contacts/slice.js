import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { nanoid } from 'nanoid';

const handlePending = state => {
  state.isLoading = true;
};
const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { name, number } = action.payload;
        const newContact = {
          // id: nanoid(),
          // state.items.length === 0
          //   ? 1
          //   : Number(state.items[state.items.length - 1].id) + 1,
          name,
          number,
        };
        state.items.push(newContact);
      })
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [
          ...state.items.filter(contact => contact.id !== action.payload.id),
        ];
        // const index = state.items.findIndex(
        //   contact => contact.id === action.payload.id
        // );
        // state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleError);
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
