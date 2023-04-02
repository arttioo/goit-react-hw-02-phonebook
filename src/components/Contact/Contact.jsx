import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div>
      {name}:{number}
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
