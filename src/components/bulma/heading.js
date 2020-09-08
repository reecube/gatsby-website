import React from 'react';
import PropTypes from 'prop-types';

import config from './config';

const Heading = props => {
  const HeadingTag = `h${props.rank}`;
  const newProps = {
    className: `${props.subtitle ? 'sub' : ''}title is-${props.rank}${props.spaced ? ' is-spaced' : ''}`,
    ...props,
  };

  delete newProps.rank;

  return (
    <HeadingTag {...newProps}>
      {props.children}
    </HeadingTag>
  );
};

Heading.defaultProps = {
  subtitle: false,
  spaced: false,
};

Heading.propTypes = {
  rank: PropTypes.oneOf(config.headings).isRequired,
  subtitle: PropTypes.bool,
  spaced: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Heading;
