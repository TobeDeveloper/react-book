import React from 'react';
import PropTypes from 'prop-types';

const propType = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired
};

function List({ items, onDelete }) {
  const itemList = items.map(item => (
    <li key={item.id}>
      {item.content}
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  ));

  return (
    <ul>
      <h2>Todos of today:</h2>
      {itemList}
    </ul>
  );
}
List.propTypes = propType;
List.defaultProp = {
  items: null
};
export default List;
