import { useState } from 'react';
import ContactList from '../components/ContactList';
import Modal from '../components/Modal';
import ContactForm from '../components/ContactForm';
import { Contact } from '../types/contact';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const openAddModal = () => {
    setEditingContact(null);
    setIsModalOpen(true);
  };
  const openEditModal = (contact: Contact) => {
    setEditingContact(contact); 
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={openAddModal}
      >
        Create Contact
      </button>
      <ContactList onEdit={openEditModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm contact={editingContact} onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default ContactsPage
