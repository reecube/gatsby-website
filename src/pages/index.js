import React from 'react';

import { graphql } from 'gatsby';
import Image from 'gatsby-image';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import Layout from '../components/layout/layout';

import Heading from '../components/base/heading';

const IndexPage = props => <Layout>
  <Heading rank={1} component="h1" spaced={false}>Yves Riedener</Heading>
  <Heading rank={4} component="p" spaced={false}>
    ICT architect and full stack developer
  </Heading>

  <Divider />

  <Grid container
        direction="row"
        justify="space-between"
        alignItems="center">
    <Grid item xs={12} md={4}>
      <Image fluid={props.data.file.childImageSharp.fluid} style={{
        borderRadius: '100%',
      }} />
    </Grid>
    <Grid item xs={12} md={8}>
      <p>Test1</p>
    </Grid>
  </Grid>

  <Button color="primary">Hello World</Button>
</Layout>;

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "profile-square2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 700, maxHeight: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
