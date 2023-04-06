import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';
import { FilterField } from './Filter.styled';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <FilterField
        value={value}
        onChange={onChangeFilter}
        type="text"
        name="filter"
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
