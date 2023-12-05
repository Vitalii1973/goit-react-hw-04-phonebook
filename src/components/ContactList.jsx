import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
