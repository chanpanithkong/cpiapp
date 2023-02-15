// material-ui
import { Grid } from '@mui/material';

// project imports
//import LoginForms from 'sections/forms/validation/LoginForms';
//import InstantFeedback from 'sections/forms/validation/InstantFeedback';
//import RadioGroupForms from 'sections/forms/validation/RadioGroupForms';
//import CheckboxForms from 'sections/forms/validation/CheckboxForms';
//import SelectForms from 'sections/forms/validation/SelectForms';
import IngredientForm from 'sections/forms/food/ingredient';

// ==============================|| FORMS VALIDATION - FORMIK ||============================== //

const Ingredient = () => (
  <Grid container spacing={2.5}>
    {/* <Grid item xs={12} md={6}>
      <LoginForms />
    </Grid> */}
    <Grid item xs={12} md={12}>
      <IngredientForm />
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

export default Ingredient;
