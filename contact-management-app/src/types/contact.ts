export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: 'active' | 'inactive';
}

export interface ContactsState {
  contacts: Contact[];
}
