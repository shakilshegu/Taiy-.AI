import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

const ContactsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <ContactForm />
      <ContactList />
    </div>
  )
}

export default ContactsPage
