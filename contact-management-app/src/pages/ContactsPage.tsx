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
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Contact Management</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 ease-in-out"
          onClick={openAddModal}
        >
          Create Contact
        </button>
      </div>
      <ContactList onEdit={openEditModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm contact={editingContact} onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default ContactsPage
