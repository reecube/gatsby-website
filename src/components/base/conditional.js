import React from 'react';
import PropTypes from 'prop-types';

const Conditional = props => {
  if (!props.show) return null;

  return (
    <>
      {props.children}
    </>
  );
};

Conditional.propTypes = {
  show: PropTypes.any,
  children: PropTypes.node,
};

export default Conditional;
