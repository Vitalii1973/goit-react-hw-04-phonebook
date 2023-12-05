import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Filter contacts by name:
        <input
          type="text"
          name="name"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
