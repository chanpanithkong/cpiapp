import { useDispatch } from 'store';

// material-ui
import { Button, Grid, InputLabel, Stack, TextField, CardActions, Tooltip, Select, MenuItem, FormControl, Divider } from '@mui/material';

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

const FruitForm = () => {
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
    <MainCard title="ផ្លែឈើ">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2} alignItems="left">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={4}>
                <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }} size="small">
                  ចេកណាំវ៉ា :
                </InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={8}>
                <Stack spacing={1}>
                  <TextField id="filled-basic-small" label="Qty" variant="filled" size="small" />
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
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃរាយ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃរាយ" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃសរុប" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2} alignItems="left">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={4}>
                <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }} size="small">
                  ប៉ោម :
                </InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={8}>
                <Stack spacing={1}>
                  <TextField id="filled-basic-small" label="Qty" variant="filled" size="small" />
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
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃរាយ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃរាយ" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃសរុប" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2} alignItems="left">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={4}>
                <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }} size="small">
                  ក្រូចពោធិសាត់ :
                </InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={8}>
                <Stack spacing={1}>
                  <TextField id="filled-basic-small" label="Qty" variant="filled" size="small" />
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
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃរាយ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃរាយ" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃសរុប" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2} alignItems="left">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={4}>
                <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }} size="small">
                  មៀន :
                </InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={8}>
                <Stack spacing={1}>
                  <TextField id="filled-basic-small" label="Qty" variant="filled" size="small" />
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
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃរាយ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃរាយ" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃសរុប" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ paddingtop: '0px' }}>
            <Divider />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={2} alignItems="left">
              {/* <Grid item xs={4} sm={3} lg={4} sx={{ pt: { xs: 2, sm: '0 !important' } }}> */}
              <Grid item xs={4} sm={3} lg={4}>
                <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }} size="small">
                  ទំពាំងបាយជូរធម្មតា :
                </InputLabel>
              </Grid>
              <Grid item xs={8} sm={9} lg={8}>
                <Stack spacing={1}>
                  <TextField id="filled-basic-small" label="Qty" variant="filled" size="small" />
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
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>គីឡូ</MenuItem>
                  <MenuItem value={20}>ក្រាម</MenuItem>
                  <MenuItem value={30}>លីត្រ</MenuItem>
                  <MenuItem value={40}>ផ្សេងៗ</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            {/* <Stack spacing={2}>
              <TextField id="outlined-basic"  label="តំលៃរាយ" size="small"/>
            </Stack> */}
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃរាយ" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={4} lg={2}>
            <Stack spacing={1}>
              {/* <InputLabel htmlFor="email">រូបិយប័ណ្ណ</InputLabel> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">រូបិយប័ណ្ណ</InputLabel>
                <Select id="demo-simple-select" value={10} size="medium">
                  <MenuItem value={10}>រៀល</MenuItem>
                  <MenuItem value={20}>ដុល្លា</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid item xs={8} lg={2}>
            <Stack spacing={1}>
              <TextField id="filled-basic-small" label="តំលៃសរុប" variant="filled" size="small" />
              {/* <TextField sx={{ textAlign: { xs: 'left', sm: 'right' } }} fullWidth placeholder="Enter full name" /> */}
            </Stack>
          </Grid>
          <Grid item xs={12} style={{ padding: '0px' }}>
            <Divider />
          </Grid>
          {/* <Grid item xs={12} lg={6}>
            <Pagination count={11} defaultPage={3} color="primary" variant="combined" />
          </Grid> */}
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

export default FruitForm;
