import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '../redux/contactsSlice';
import { Contact } from '../types/contact';

interface ContactFormProps {
  contact: Contact | null;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact) {
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setStatus(contact.status);
    } else {
      setFirstName('');
      setLastName('');
      setStatus('active');
    }
  }, [contact]);

  const handleSubmit = () => {
    if (contact) {
      dispatch(updateContact({ ...contact, firstName, lastName, status }));
    } else {
      dispatch(addContact({ firstName, lastName, status }));
    }
    onClose();
  };

  return (
    <div className=" p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg">
     <h1 className="text-xl font-semibold mb-4">{contact ? 'Edit Contact' : 'Add Contact'}</h1>
     <div className="mb-4">
     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
      <input
       id="firstName"
        type="text"
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => {
          const value = e.target.value.trim()
          if (/^[a-zA-Z]*$/.test(value)) {
            setFirstName(value);
          }
        }}
      />
      </div>
      <div className="mb-4">
      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
      <input
       id="lastName"
        type="text"
         className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => {
          const value = e.target.value.trim()
          if (/^[a-zA-Z]*$/.test(value)) {
            setLastName(value);
          }
        }}
      />
      </div>
      <div className="flex flex-col md:flex-row md:items-center mb-4">
      <h2 className="text-sm font-medium text-gray-700 mr-4">Status:</h2>
      <div className="flex flex-col md:flex-row">
        <label className="flex items-center mr-4">
          <input
            type="radio"
            name="status"
            value="active"
            checked={status === 'active'}
            onChange={() => setStatus('active')}
            className="mr-2"
          />
          Active
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="inactive"
            checked={status === 'inactive'}
            onChange={() => setStatus('inactive')}
            className="mr-2"
          />
          Inactive
        </label>
      </div>
      </div>
      <button
        className="btn btn-primary w-full bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        {contact ? 'Update Contact' : 'Add Contact'}
      </button>
    </div>
  );
};

export default ContactForm;
