// material-ui
import { Grid } from '@mui/material';

import FruitForm from 'sections/forms/transportation';

// ==============================|| FORMS HOUSE ||============================== //

const Transportation = () => (
  <Grid container spacing={2.5}>
    {/* <Grid item xs={12} md={6}>
      <LoginForms />
    </Grid> */}
    <Grid item xs={12} md={12}>
      <FruitForm />
    </Grid>
    {/* <Grid item xs={12} md={6}>
      <RadioGroupForms />
    </Grid> */}
    {/* <Grid item xs={12} md={6}>
      <CheckboxForms />
    </Grid>
    <Grid item xs={12} md={6}>
      <SelectForms />
    </Grid> */}
  </Grid>
);

export default Transportation;
