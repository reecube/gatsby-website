import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import config from '../config';

const Heading = props => {
  const newProps = {
    variant: `h${props.rank}`,
    ...props,
  };

  if (props.spaced) newProps.gutterBottom = true;

  delete newProps.rank;
  delete newProps.spaced;
  delete newProps.children;

  return <Typography {...newProps}>
    {props.children}
  </Typography>;
};

Heading.defaultProps = {
  spaced: true,
};

Heading.propTypes = {
  rank: PropTypes.oneOf(config.headings).isRequired,
  spaced: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Heading;
