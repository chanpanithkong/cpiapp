// material-ui
import { Grid } from '@mui/material';

import ClothesForm from 'sections/forms/clothes';

// ==============================|| FORMS HOUSE ||============================== //

const Clothes = () => (
  <Grid container spacing={2.5}>
    {/* <Grid item xs={12} md={6}>
      <LoginForms />
    </Grid> */}
    <Grid item xs={12} md={12}>
      <ClothesForm />
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

export default Clothes;
