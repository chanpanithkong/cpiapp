import { useDispatch } from 'store';

// material-ui
import { Button, Grid, InputLabel, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'store/reducers/snackbar';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

/**
 * 'Enter your email'
 * yup.string Expected 0 arguments, but got 1 */
const validationSchema = yup.object({
  emailInstant: yup.string().email('Enter a valid email').required('Email is required'),
  passwordInstant: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
  rise2Instant: yup.string().min(8, 'something').required('Password is required')
});

// ==============================|| FORM VALIDATION - INSTANT FEEDBACK FORMIK  ||============================== //

const RiceForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      emailInstant: '',
      passwordInstant: '',
      rise2Instant: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('select form submit - ', values);
      dispatch(
        openSnackbar({
          open: true,
          message: 'On Leave - Submit Success',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );
    }
  });

  return (
    <MainCard title="អង្ករ">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">អង្ករផ្កាម្លិះ/KG</InputLabel>
              <TextField
                fullWidth
                id="emailInstant"
                name="emailInstant"
                placeholder="Enter email address"
                value={formik.values.emailInstant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.emailInstant && Boolean(formik.errors.emailInstant)}
                helperText={formik.touched.emailInstant && formik.errors.emailInstant}
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="emailInstant"
                name="emailInstant"
                placeholder="Enter email address"
                value={formik.values.emailInstant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.emailInstant && Boolean(formik.errors.emailInstant)}
                helperText={formik.touched.emailInstant && formik.errors.emailInstant}
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise2">អង្ករផ្កាខ្ញី/KG</InputLabel>
              <TextField
                fullWidth
                id="rise2Instant"
                name="rise2Instant"
                //placeholder="Enter email address"
                value={formik.values.rise2Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.rise2Instant && Boolean(formik.errors.rise2Instant)}
                helperText={formik.touched.rise2Instant && formik.errors.rise2Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price2">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price2Instant"
                name="price2Instant"
                //placeholder="Enter email address"
                value={formik.values.price2Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price2Instant && Boolean(formik.errors.price2Instant)}
                helperText={formik.touched.price2Instant && formik.errors.price2Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </AnimateButton>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default RiceForm;
