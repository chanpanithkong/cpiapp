import { useDispatch } from 'store';

// material-ui
import { Button, Grid, Stack, TextField, CardActions, Autocomplete } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
//import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'store/reducers/snackbar';
//import IconButton from 'components/@extended/IconButton';
//import Pagination from '@mui/material/Pagination';

// assets
//import { DeleteFilled } from '@ant-design/icons';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormattedMessage } from 'react-intl';

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

  const ccy = [{ label: 'KHR' }, { label: 'USD' }];

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
          <Grid item xs={12} lg={2}>
            <Stack spacing={1}>
              <Button variant="text">Text</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3}>
            {/*<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  />*/}
            <TextField
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              fullWidth
              id="quantity"
              label={<FormattedMessage id="quantity" />}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Stack spacing={1}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={ccy}
                renderInput={(params) => <TextField {...params} label="Currency" />}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Stack spacing={1}>
              <TextField fullWidth id="quantity" label={<FormattedMessage id="quantity" />} />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Stack spacing={1}>
              {/*<TextField fullWidth id="quantity" label={<FormattedMessage id="quantity" />} />*/}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={ccy}
                renderInput={(params) => <TextField {...params} label="Currency" />}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CardActions>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
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
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={2}>
            <Stack spacing={1}>
              <Button variant="text">Text</Button>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField fullWidth id="quantity" label={<FormattedMessage id="quantity" />} />
          </Grid>
          <Grid item xs={12} lg={3}>
            <Stack spacing={1}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={ccy}
                renderInput={(params) => <TextField {...params} label="Currency" />}
              />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Stack spacing={1}>
              <TextField fullWidth id="quantity" label={<FormattedMessage id="quantity" />} />
            </Stack>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Stack spacing={1}>
              {/*<TextField fullWidth id="quantity" label={<FormattedMessage id="quantity" />} />*/}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={ccy}
                renderInput={(params) => <TextField {...params} label="Currency" />}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CardActions>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: 1 }}>
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
