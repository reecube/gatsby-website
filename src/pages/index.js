import React from 'react';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Layout from '../components/layout/layout';

import Heading from '../components/base/heading';

export default function Home() {
  return <Layout>
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
        <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
          <Box p={1} bgcolor="grey.300">
            Test1
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <p>Test1</p>
      </Grid>
    </Grid>

    <Button color="primary">Hello World</Button>
  </Layout>;
}
