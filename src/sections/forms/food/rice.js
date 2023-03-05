import { useDispatch } from 'store';

// material-ui
import { Button, Grid, InputLabel, Stack, TextField, Select, MenuItem, FormControl, Divider } from '@mui/material';
// project imports
import MainCard from 'components/MainCard';
//import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'store/reducers/snackbar';
//import IconButton from 'components/@extended/IconButton';
//import Pagination from '@mui/material/Pagination';

// assets
//import { DeleteFilled } from '@ant-design/icons';
//import logoDark from 'assets/images/nbclogo.png';

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

// const currencies = [
//   { value: 'KHR', label: 'រៀល', id: 1, key: 1 },
//   { value: 'USD', label: 'ដុល្លា', id: 2, key: 2 }
// ];

//const value = currencies.map((opt) => (opt.label));
//console.log(value);
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
        <Grid container spacing={2}>
          <Grid item xs={12} lg={5} alignItems="center">
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={5} alignItems="center">
                <InputLabel alignItems="center">អង្ករផ្កាម្លិះ :</InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={7}>
                <Stack spacing={1}>
                  <TextField type="number" id="filled-basic-small" label="Qty" InputLabelProps={{ shrink: true }} fullWidth />
                  {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">ខ្នាត</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ខ្នាត</InputLabel>
                <Select fullWidth id="age" name="age" value={formik.values.age} onChange={formik.handleChange} defaultValue={1}>
                  <MenuItem value={1}>ជ្រើសរើស</MenuItem>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4} lg={3}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField type="number" id="filled-basic-small" label="តំលៃ" InputLabelProps={{ shrink: true }} fullWidth />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="currency" name="currency" value={formik.values.currency} onChange={formik.handleChange} defaultValue={10}>
                  {/* {currencies.map((ccrcd) => {
                    return(
                      <MenuItem key={ccrcd.value} value={ccrcd.value}>
                        {ccrcd.label}
                      </MenuItem>
                    );
                  })} */}
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={5} alignItems="center">
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={5} alignItems="center">
                <InputLabel alignItems="center">អង្ករផ្កាខ្ញី :</InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={7}>
                <Stack spacing={1}>
                  <TextField type="number" id="filled-basic-small" label="Qty" InputLabelProps={{ shrink: true }} fullWidth />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">ខ្នាត</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ខ្នាត</InputLabel>
                <Select fullWidth id="age" name="age" value={formik.values.age} onChange={formik.handleChange} defaultValue={1}>
                  <MenuItem value={1}>ជ្រើសរើស</MenuItem>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4} lg={3}>
            <Stack spacing={1}>
              <TextField type="number" id="filled-basic-small" label="តំលៃ" InputLabelProps={{ shrink: true }} fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="currency" name="currency" value={formik.values.currency} onChange={formik.handleChange} defaultValue={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={5} alignItems="center">
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={5} alignItems="center">
                <InputLabel alignItems="center">អង្ករនាងមិញ :</InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={7}>
                <Stack spacing={1}>
                  <TextField type="number" id="filled-basic-small" label="Qty" InputLabelProps={{ shrink: true }} fullWidth />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">ខ្នាត</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ខ្នាត</InputLabel>
                <Select fullWidth id="age" name="age" value={formik.values.age} onChange={formik.handleChange} defaultValue={1}>
                  <MenuItem value={1}>ជ្រើសរើស</MenuItem>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4} lg={3}>
            <Stack spacing={1}>
              <TextField type="number" id="filled-basic-small" label="តំលៃ" InputLabelProps={{ shrink: true }} fullWidth />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="currency" name="currency" value={formik.values.currency} onChange={formik.handleChange} defaultValue={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={5} alignItems="center">
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={5} alignItems="center">
                <InputLabel alignItems="center">អង្ករនាងខុន :</InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={7}>
                <Stack spacing={1}>
                  <TextField type="number" id="filled-basic-small" label="Qty" InputLabelProps={{ shrink: true }} fullWidth />
                  {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">ខ្នាត</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ខ្នាត</InputLabel>
                <Select fullWidth id="age" name="age" value={formik.values.age} onChange={formik.handleChange} defaultValue={1}>
                  <MenuItem value={1}>ជ្រើសរើស</MenuItem>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4} lg={3}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField type="number" id="filled-basic-small" label="តំលៃ" InputLabelProps={{ shrink: true }} fullWidth />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="currency" name="currency" value={formik.values.currency} onChange={formik.handleChange} defaultValue={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={5} alignItems="center">
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={5} alignItems="center">
                <InputLabel alignItems="center">អង្ករដំណើប :</InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={7}>
                <Stack spacing={1}>
                  <TextField type="number" id="filled-basic-small" label="Qty" InputLabelProps={{ shrink: true }} fullWidth />
                  {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">ខ្នាត</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ខ្នាត</InputLabel>
                <Select fullWidth id="age" name="age" value={formik.values.age} onChange={formik.handleChange} defaultValue={1}>
                  <MenuItem value={1}>ជ្រើសរើស</MenuItem>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4} lg={3}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField type="number" id="filled-basic-small" label="តំលៃ" InputLabelProps={{ shrink: true }} fullWidth />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="currency" name="currency" value={formik.values.currency} onChange={formik.handleChange} defaultValue={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={5} alignItems="center">
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={5} alignItems="center">
                <InputLabel alignItems="center">ធញ្ញជាតិផ្សេងៗ (សណ្តែកបាយ ក្រហម ខៀវ):</InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={7}>
                <Stack spacing={1}>
                  <TextField type="number" id="filled-basic-small" label="Qty" InputLabelProps={{ shrink: true }} fullWidth />
                  {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">ខ្នាត</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ខ្នាត</InputLabel>
                <Select fullWidth id="age" name="age" value={formik.values.age} onChange={formik.handleChange} defaultValue={1}>
                  <MenuItem value={1}>ជ្រើសរើស</MenuItem>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={4} lg={3}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField type="number" id="filled-basic-small" label="តំលៃ" InputLabelProps={{ shrink: true }} fullWidth />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="currency" name="currency" value={formik.values.currency} onChange={formik.handleChange} defaultValue={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={1} justifyContent="flex-end" sx={{ width: 1, px: 1.5, py: 0.75 }}>
              <Button variant="contained" size="small">
                Save
              </Button>
              <Button variant="shadow" color="error" size="small">
                Reset
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
};

export default RiceForm;
