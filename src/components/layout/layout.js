import React from 'react';

import Section from '../bulma/section';
import Container from '../bulma/container';

import './layout.scss';

const Layout = props => (
  <Section>
    <Container>
      {props.children}
    </Container>
  </Section>
);

export default Layout;
