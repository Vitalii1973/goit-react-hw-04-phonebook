import React from 'react';
import './Buttons.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}{' '}
      <button
        className="deleteContactButton"
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
