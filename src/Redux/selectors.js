import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
const getContactItems = state => state.contacts.items;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContactItems, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  }
);
