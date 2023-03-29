// material-ui
import { Grid } from '@mui/material';
import DataInput from 'sections/forms/datainput';

// ==============================|| FORMS HOUSE ||============================== //

const dataInput = () => (
  <Grid container spacing={2.5}>
    <Grid item xs={12} md={12}>
      <DataInput />
    </Grid>
  </Grid>
);

export default dataInput;
