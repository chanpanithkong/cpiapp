// material-ui
import { Grid } from '@mui/material';

import HouseForm from 'sections/forms/house';

// ==============================|| FORMS HOUSE ||============================== //

const House = () => (
  <Grid container spacing={2.5}>
    <Grid item xs={12} md={12}>
      <HouseForm />
    </Grid>
  </Grid>
);

export default House;
