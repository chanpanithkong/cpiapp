// material-ui
import { Grid } from '@mui/material';

// project imports
//import LoginForms from 'sections/forms/validation/LoginForms';
//import InstantFeedback from 'sections/forms/validation/InstantFeedback';
//import RadioGroupForms from 'sections/forms/validation/RadioGroupForms';
//import CheckboxForms from 'sections/forms/validation/CheckboxForms';
//import SelectForms from 'sections/forms/validation/SelectForms';
import UserProfile from 'sections/forms/user';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const User = () => (
  <Grid container spacing={2.5}>
    {/* <Grid item xs={12} md={6}>
      <LoginForms />
    </Grid> */}
    <Grid item xs={12} md={12}>
      <UserProfile />
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

export default User;
