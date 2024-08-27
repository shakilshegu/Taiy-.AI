import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('active');
  const dispatch = useDispatch();

  const handleAddContact = () => {
    dispatch(addContact({ firstName, lastName, status }));
    setFirstName('');
    setLastName('');
    setStatus('active');
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="input"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        className="input"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
     <div className="status-selection">
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
      <button
        className="btn btn-primary"
        onClick={handleAddContact}
      >
        Add Contact
      </button>
    </div>
  );
};

export default ContactForm;
