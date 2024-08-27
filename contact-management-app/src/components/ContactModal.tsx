import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Contact } from '../types/contact';
import { updateContact } from '../redux/contactsSlice'; 

interface ContactModalProps {
  contact: Contact;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, onClose }) => {
    const [firstName, setFirstName] = useState(contact.firstName);
    const [lastName, setLastName] = useState(contact.lastName);
    const [status, setStatus] = useState(contact.status);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(updateContact({ ...contact, firstName, lastName,status }));
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Contact Details</h2>
        <div>
        <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
        <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Status:</label>
          <div>
            <label>
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === 'active'}
                onChange={() => setStatus('active')}
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
              />
              Inactive
            </label>
          </div>
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default ContactModal;
