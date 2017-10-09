import React from 'react';
import PropTypes from 'prop-types';

const propType = {
  onClick: PropTypes.func.isRequired
};
function CreateButton({ onClick }) {
  return (
    <div className="createButtonComponent">
      <button onClick={() => { onClick(); }}>Create new</button>
    </div>
  );
}

CreateButton.propTypes = propType;
export default CreateButton;
