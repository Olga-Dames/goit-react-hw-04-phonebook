import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';
import { Heading } from './App.styled';
import { Title } from './App.styled';

const STORAGE_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitHandler = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const existingName = contacts.find(item => item.name === contact.name);

    existingName
      ? Notiflix.Notify.info(`${contact.name} is already in contacts`)
      : setContacts(prev => [...prev, contact]);
    return existingName;
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Heading>Phonebook</Heading>
      <ContactForm onSubmit={onSubmitHandler} />
      <Title>Contacts</Title>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={getVisibleContacts()} onDelete={deleteContact} />
    </Container>
  );
}
