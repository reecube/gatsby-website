import React from 'react';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

const Layout = props => (
  <Container component="main">
    {props.children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
