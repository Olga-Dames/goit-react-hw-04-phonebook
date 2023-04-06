import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from './ContactListItem.styled';
import { ListItem } from './ContactListItem.styled';
import { Button } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ListItem>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};
