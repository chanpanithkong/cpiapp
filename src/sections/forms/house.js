import { useDispatch } from 'store';

// material-ui
import { Button, Grid, InputLabel, Stack, TextField, CardActions, Tooltip, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
//import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'store/reducers/snackbar';
import IconButton from 'components/@extended/IconButton';
//import Pagination from '@mui/material/Pagination';

// assets
import { DeleteFilled } from '@ant-design/icons';

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

const HouseForm = () => {
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
    <MainCard>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Typography>Gas</Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">????</InputLabel>
              <TextField
                fullWidth
                id="emailInstant"
                name="emailInstant"
                placeholder="Enter email address"
                value={formik.values.emailInstant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.emailInstant && Boolean(formik.errors.emailInstant)}
                //helperText={formik.touched.emailInstant && formik.errors.emailInstant}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise2">?????????????/KG</InputLabel>
              <TextField
                fullWidth
                id="rise2Instant"
                name="rise2Instant"
                //placeholder="Enter email address"
                value={formik.values.rise2Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise2Instant && Boolean(formik.errors.rise2Instant)}
                //helperText={formik.touched.rise2Instant && formik.errors.rise2Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise2">?????????????/KG</InputLabel>
              <TextField
                fullWidth
                id="rise2Instant"
                name="rise2Instant"
                //placeholder="Enter email address"
                value={formik.values.rise2Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise2Instant && Boolean(formik.errors.rise2Instant)}
                //helperText={formik.touched.rise2Instant && formik.errors.rise2Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <CardActions>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
                <Tooltip title="Delete" placement="top">
                  <IconButton size="large" color="error">
                    <DeleteFilled />
                  </IconButton>
                </Tooltip>
                <Stack direction="row" spacing={1} sx={{ px: 1.5, py: 0.75 }}>
                  <Button variant="shadow" color="error">
                    Cancel
                  </Button>
                  {/* <Button color="error" size="small">
                    Cancel
                  </Button> */}
                  <Button variant="contained" size="small">
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </CardActions>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default HouseForm;
