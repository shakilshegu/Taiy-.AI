import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteContact } from '../redux/contactsSlice';
import ContactModal from './ContactModal';
import { Contact } from '../types/contact';

const ContactList: React.FC = () => {
  // Ensure `contacts` is correctly typed as an array of Contact objects
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleView = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id} className="mb-2 flex justify-between">
          <div>
            <p>{contact.firstName}</p>
            <p>{contact.lastName}</p>
          </div>
          <div>
          <button 
              className="btn btn-primary mr-2"
              onClick={() => handleView(contact)}
            >
              View
            </button>
          <button 
            className="btn btn-danger"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>

          </div>
        </div>
      ))}
      {isModalOpen && selectedContact && (
        <ContactModal contact={selectedContact} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ContactList;
