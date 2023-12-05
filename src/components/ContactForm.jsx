import React from 'react';
import './Buttons.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className="addContactButton" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
