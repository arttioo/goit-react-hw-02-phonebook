import React from 'react';
import PropTypes from 'prop-types';
import {Item,List} from './Contacts.styled';
  

export const ContactList = ({ contacts, onDelete }) => {
  console.log(contacts);
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}:{number}
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </Item>
      ))}
    </List>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
