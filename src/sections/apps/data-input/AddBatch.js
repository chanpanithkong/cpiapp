import { useState } from 'react';
import PropTypes from 'prop-types';
//import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// material-ui
// import { useTheme } from '@mui/material/styles';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

// third-party
import _ from 'lodash';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';

// project imports
// import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import { openSnackbar } from 'store/reducers/snackbar';

// assets
import { DeleteFilled } from '@ant-design/icons';

//const avatarImage = require.context('assets/images/users', true);

// constant
const getInitialValues = (customer) => {
  const newCustomer = {
    name: '',
    email: '',
    location: '',
    orderStatus: ''
  };

  if (customer) {
    newCustomer.name = customer.fatherName;
    newCustomer.location = customer.address;
    return _.merge({}, newCustomer, customer);
  }

  return newCustomer;
};

const allStatus = ['Complicated', 'Single', 'Relationship'];

// ==============================|| CUSTOMER ADD / EDIT / DELETE ||============================== //

const AddBatch = ({ customer, onCancel }) => {
  //const theme = useTheme();
  const dispatch = useDispatch();
  const isCreating = !customer;

  //const [selectedImage, setSelectedImage] = useState(undefined);
  //const [avatar, setAvatar] = useState(avatarImage(`./avatar-${isCreating && !customer?.avatar ? 1 : customer.avatar}.png`).default);

  // useEffect(() => {
  //   if (selectedImage) {
  //     setAvatar(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

  const CustomerSchema = Yup.object().shape({
    code: Yup.string().max(255).required('Batch code is required'),
    //orderStatus: Yup.string().required('Name is required'),
    //email: Yup.string().max(255).required('Email is required').email('Must be a valid email'),
    batchname: Yup.string().max(255).required('Batch name is required'),
    //location: Yup.string().max(500)
  });

  const deleteHandler = () => {
    // dispatch(deleteCustomer(customer?.id)); - delete
    dispatch(
      openSnackbar({
        open: true,
        message: 'Customer deleted successfully.',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );
    onCancel();
  };

  const formik = useFormik({
    initialValues: getInitialValues(customer),
    validationSchema: CustomerSchema,
    onSubmit: (values, { setSubmitting }) => {
      try {
        // const newCustomer = {
        //   name: values.name,
        //   email: values.email,
        //   location: values.location,
        //   orderStatus: values.orderStatus
        // };

        if (customer) {
          // dispatch(updateCustomer(customer.id, newCustomer)); - update
          dispatch(
            openSnackbar({
              open: true,
              message: 'Customer update successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        } else {
          // dispatch(createCustomer(newCustomer)); - add
          dispatch(
            openSnackbar({
              open: true,
              message: 'Batch add successfully.',
              variant: 'alert',
              alert: {
                color: 'success'
              },
              close: false
            })
          );
        }

        setSubmitting(false);
        onCancel();
      } catch (error) {
        console.error(error);
      }
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps, setFieldValue } = formik;
  const [datetime, setDatetime] = useState(new Date());
  return (
    <FormikProvider value={formik}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <DialogTitle>{customer ? 'Edit Batch' : 'Create New Batch'}</DialogTitle>
          <Divider />
          <DialogContent sx={{ p: 2.5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="batchcode">Batch Code</InputLabel>
                      <TextField
                        fullWidth
                        id="batchcode"
                        placeholder="Enter Batch Code"
                        {...getFieldProps('code')}
                        error={Boolean(touched.code && errors.code)}
                        helperText={touched.code && errors.code}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="customer-email">Batch Name</InputLabel>
                      <TextField
                        fullWidth
                        id="customer-email"
                        placeholder="Enter Batch Name"
                        {...getFieldProps('batchname')}
                        error={Boolean(touched.batchname && errors.batchname)}
                        helperText={touched.batchname && errors.batchname}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="customer-orderStatus">Branch</InputLabel>
                      <FormControl fullWidth>
                        <Select
                          id="column-hiding"
                          displayEmpty
                          {...getFieldProps('orderStatus')}
                          onChange={(event) => setFieldValue('orderStatus', event.target.value)}
                          input={<OutlinedInput id="select-column-hiding" placeholder="Sort by" />}
                          renderValue={(selected) => {
                            if (!selected) {
                              return <Typography variant="subtitle1">Select Branch</Typography>;
                            }

                            return <Typography variant="subtitle2">{selected}</Typography>;
                          }}
                        >
                          {allStatus.map((column) => (
                            <MenuItem key={column} value={column}>
                              <ListItemText primary={column} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {touched.orderStatus && errors.orderStatus && (
                        <FormHelperText error id="standard-weight-helper-text-email-login" sx={{ pl: 1.75 }}>
                          {errors.orderStatus}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={0.5}>
                      <InputLabel>Open Date</InputLabel>
                      <MobileDateTimePicker
                        value={datetime}
                        onChange={(newValue) => {
                          setDatetime(newValue);
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={0.5}>
                      <InputLabel>Close Date</InputLabel>
                      <MobileDateTimePicker
                        value={datetime}
                        onChange={(newValue) => {
                          setDatetime(newValue);
                        }}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1.25}>
                      <InputLabel htmlFor="detail">Detail</InputLabel>
                      <TextField
                        fullWidth
                        id="detail"
                        multiline
                        rows={2}
                        placeholder="Enter Detail"
                        //{...getFieldProps('detail')}
                        //error={Boolean(touched.location && errors.detail)}
                        //helperText={touched.detail && errors.detail}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <Divider />
          <DialogActions sx={{ p: 2.5 }}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                {!isCreating && (
                  <Tooltip title="Delete Customer" placement="top">
                    <IconButton onClick={deleteHandler} size="large" color="error">
                      <DeleteFilled />
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Button color="error" onClick={onCancel}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" disabled={isSubmitting}>
                    {customer ? 'Edit' : 'Add'}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </DialogActions>
        </Form>
      </LocalizationProvider>
    </FormikProvider>
  );
};

AddBatch.propTypes = {
  customer: PropTypes.any,
  onCancel: PropTypes.func
};

export default AddBatch;
