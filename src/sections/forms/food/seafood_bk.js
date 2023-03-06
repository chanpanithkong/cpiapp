import { useDispatch } from 'store';

// material-ui
import { Button, Grid, InputLabel, Stack, TextField, CardActions, Tooltip, Select, MenuItem, FormControl } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
//import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'store/reducers/snackbar';
import IconButton from 'components/@extended/IconButton';
import Pagination from '@mui/material/Pagination';

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

const SeafoodForm = () => {
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
    <MainCard title="ត្រី និងគ្រឿងសមុទ្រ">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ត្រីរ៉ស់ (ស្រែ)</InputLabel>
              <TextField
                fullWidth
                id="emailInstant"
                name="emailInstant"
                //placeholder="Enter email address"
                value={formik.values.emailInstant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.emailInstant && Boolean(formik.errors.emailInstant)}
                //helperText={formik.touched.emailInstant && formik.errors.emailInstant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="emailInstant"
                name="emailInstant"
                //placeholder="Enter email address"
                value={formik.values.emailInstant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.emailInstant && Boolean(formik.errors.emailInstant)}
                //helperText={formik.touched.emailInstant && formik.errors.emailInstant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise2">ត្រីរ៉ស់ (ចិញ្ចឹម)</InputLabel>
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
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
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
                //error={formik.touched.price2Instant && Boolean(formik.errors.price2Instant)}
                //helperText={formik.touched.price2Instant && formik.errors.price2Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise3">ត្រីឆ្តោ</InputLabel>
              <TextField
                fullWidth
                id="rise3Instant"
                name="rise3Instant"
                //placeholder="Enter email address"
                value={formik.values.rise3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise3Instant && Boolean(formik.errors.rise3Instant)}
                //helperText={formik.touched.rise3Instant && formik.errors.rise3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise4">ត្រីអណ្តែង</InputLabel>
              <TextField
                fullWidth
                id="rise4Instant"
                name="rise4Instant"
                //placeholder="Enter email address"
                value={formik.values.rise4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise4Instant && Boolean(formik.errors.rise4Instant)}
                //helperText={formik.touched.rise4Instant && formik.errors.rise4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price4">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price4Instant"
                name="price4Instant"
                //placeholder="Enter email address"
                value={formik.values.price4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price4Instant && Boolean(formik.errors.price4Instant)}
                //helperText={formik.touched.price4Instant && formik.errors.price4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise3">ត្រីទីឡាបយ៉ា</InputLabel>
              <TextField
                fullWidth
                id="rise3Instant"
                name="rise3Instant"
                //placeholder="Enter email address"
                value={formik.values.rise3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise3Instant && Boolean(formik.errors.rise3Instant)}
                //helperText={formik.touched.rise3Instant && formik.errors.rise3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise3">ត្រីងៀត</InputLabel>
              <TextField
                fullWidth
                id="rise3Instant"
                name="rise3Instant"
                //placeholder="Enter email address"
                value={formik.values.rise3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise3Instant && Boolean(formik.errors.rise3Instant)}
                //helperText={formik.touched.rise3Instant && formik.errors.rise3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise4">ប្រហុក</InputLabel>
              <TextField
                fullWidth
                id="rise4Instant"
                name="rise4Instant"
                //placeholder="Enter email address"
                value={formik.values.rise4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise4Instant && Boolean(formik.errors.rise4Instant)}
                //helperText={formik.touched.rise4Instant && formik.errors.rise4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise4">ត្រីអណ្តែង</InputLabel>
              <TextField
                fullWidth
                id="rise4Instant"
                name="rise4Instant"
                //placeholder="Enter email address"
                value={formik.values.rise4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise4Instant && Boolean(formik.errors.rise4Instant)}
                //helperText={formik.touched.rise4Instant && formik.errors.rise4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise4">ត្រីសមុទ្រ(កាម៉ុងចំហុយ)</InputLabel>
              <TextField
                fullWidth
                id="rise4Instant"
                name="rise4Instant"
                //placeholder="Enter email address"
                value={formik.values.rise4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise4Instant && Boolean(formik.errors.rise4Instant)}
                //helperText={formik.touched.rise4Instant && formik.errors.rise4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise4">បង្គា</InputLabel>
              <TextField
                fullWidth
                id="rise4Instant"
                name="rise4Instant"
                //placeholder="Enter email address"
                value={formik.values.rise4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise4Instant && Boolean(formik.errors.rise4Instant)}
                //helperText={formik.touched.rise4Instant && formik.errors.rise4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise4">មឹក</InputLabel>
              <TextField
                fullWidth
                id="rise4Instant"
                name="rise4Instant"
                //placeholder="Enter email address"
                value={formik.values.rise4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise4Instant && Boolean(formik.errors.rise4Instant)}
                //helperText={formik.touched.rise4Instant && formik.errors.rise4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="rise4">ងាវ</InputLabel>
              <TextField
                fullWidth
                id="rise4Instant"
                name="rise4Instant"
                //placeholder="Enter email address"
                value={formik.values.rise4Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.rise4Instant && Boolean(formik.errors.rise4Instant)}
                //helperText={formik.touched.rise4Instant && formik.errors.rise4Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">ខ្នាត</InputLabel>
              <FormControl fullWidth>
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="price3">តំលៃ</InputLabel>
              <TextField
                fullWidth
                id="price3Instant"
                name="price3Instant"
                //placeholder="Enter email address"
                value={formik.values.price3Instant}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                //error={formik.touched.price3Instant && Boolean(formik.errors.price3Instant)}
                //helperText={formik.touched.price3Instant && formik.errors.price3Instant}
              />
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel>
              <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel> */}
                <Select id="demo-simple-select" value={10}>
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Pagination count={11} defaultPage={3} color="primary" variant="combined" />
          </Grid>
          {/* <Grid item xs={12}>
            <MainCard title="With side action button" content={false}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <Stack spacing={0.5}>
                      <InputLabel>Name</InputLabel>
                      <TextField fullWidth placeholder="Enter full name" />
                      <FormHelperText>Please enter your full name</FormHelperText>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
            </MainCard>
          </Grid> */}
          <Grid item xs={12}>
            {/* <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
                <Button variant="contained" type="clear">
                  Clear
                </Button>
                <Button variant="contained" type="save">
                  Save
                </Button>
              </AnimateButton>
            </Stack> */}
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

export default SeafoodForm;
