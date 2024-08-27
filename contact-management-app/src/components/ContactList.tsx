import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteContact } from '../redux/contactsSlice';
import { Contact } from '../types/contact';


interface ContactListProps {
  onEdit: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ onEdit }) => {
  //* Ensure `contacts` is correctly typed as an array of Contact objects
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();


  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };


  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {contacts.map(contact => (
        <div
          key={contact.id}
          className="bg-white shadow-lg rounded-lg border border-gray-200 p-4 flex flex-col items-center text-center"
        >
          <div className="mb-4  flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-2">
            <p className="text-xl font-semibold text-white">{contact.firstName.charAt(0)}{contact.lastName.charAt(0)}</p>
          </div>
            <p className="text-xl font-semibold">{contact.firstName} {contact.lastName}</p>
            <p className={`mt-1 text-lg font-semibold ${contact.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
              {contact.status}
            </p>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => onEdit(contact)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
