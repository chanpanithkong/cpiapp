import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  ButtonBase,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Tooltip,
  Typography
} from '@mui/material';

// third-party
import { useFormik, Form, FormikProvider } from 'formik';
import * as yup from 'yup';

// project imports
import ColorOptions from 'sections/apps/e-commerce/products/ColorOptions';
import Avatar from 'components/@extended/Avatar';
import { useDispatch, useSelector } from 'store';
import { addProduct } from 'store/reducers/cart';
import { openSnackbar } from 'store/reducers/snackbar';

// assets
import { DownOutlined, UpOutlined } from '@ant-design/icons';

// product color select
function getColor(color) {
  return ColorOptions.filter((item) => item.value === color);
}

const validationSchema = yup.object({
  color: yup.string().required('Color selection is required')
});

// ==============================|| COLORS OPTION ||============================== //

const Colors = ({ checked, colorsData }) => {
  const theme = useTheme();
  return (
    <Grid item>
      <Tooltip title={colorsData.length && colorsData[0] && colorsData[0].label ? colorsData[0].label : ''}>
        <ButtonBase
          sx={{
            borderRadius: '50%',
            '&:focus-visible': {
              outline: `2px solid ${theme.palette.secondary.dark}`,
              outlineOffset: 2
            }
          }}
        >
          <Avatar
            color="inherit"
            size="sm"
            sx={{
              bgcolor: colorsData[0]?.bg,
              color: theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[800],
              border: '3px solid',
              borderColor: checked ? theme.palette.secondary.light : theme.palette.background.paper
            }}
          >
            {' '}
          </Avatar>
        </ButtonBase>
      </Tooltip>
    </Grid>
  );
};

Colors.propTypes = {
  checked: PropTypes.bool,
  colorsData: PropTypes.array
};

// ==============================|| PRODUCT DETAILS - INFORMATION ||============================== //

const ProductInfo = ({ product }) => {
  const theme = useTheme();

  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const history = useNavigate();
  const cart = useSelector((state) => state.cart);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: product.id,
      name: product.name,
      image: product.image,
      salePrice: product.salePrice,
      offerPrice: product.offerPrice,
      color: '',
      size: '',
      quantity: 1
    },
    validationSchema,
    onSubmit: (values) => {
      values.quantity = value;
      dispatch(addProduct(values, cart.checkout.products));
      dispatch(
        openSnackbar({
          open: true,
          message: 'Submit Success',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );

      history('/apps/e-commerce/checkout');
    }
  });

  const { errors, values, handleSubmit, handleChange } = formik;

  const addCart = () => {
    values.color = values.color ? values.color : 'primaryDark';
    values.quantity = value;
    dispatch(addProduct(values, cart.checkout.products));
    dispatch(
      openSnackbar({
        open: true,
        message: 'Add To Cart Success',
        variant: 'alert',
        alert: {
          color: 'success'
        },
        close: false
      })
    );
  };

  return (
    <Stack spacing={1}>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <Stack direction="row" spacing={8} alignItems="center">
              <Typography color="textSecondary">Color</Typography>
              <RadioGroup row value={values.color} onChange={handleChange} aria-label="colors" name="color" id="color" sx={{ ml: 1 }}>
                {product.colors &&
                  product.colors.map((item, index) => {
                    const colorsData = getColor(item);
                    return (
                      <FormControlLabel
                        key={index}
                        value={item}
                        control={
                          <Radio
                            sx={{ p: 0.25 }}
                            disableRipple
                            checkedIcon={<Colors checked colorsData={colorsData} />}
                            icon={<Colors colorsData={colorsData} />}
                          />
                        }
                        label=""
                      />
                    );
                  })}
              </RadioGroup>
            </Stack>
            {errors.color && (
              <FormHelperText error id="standard-label-color">
                {errors.color}
              </FormHelperText>
            )}
            <Stack direction="row" alignItems="center" spacing={4.5}>
              <Typography color="textSecondary">Quantity</Typography>
              <Stack justifyContent="flex-end">
                <Stack direction="row">
                  <TextField
                    name="rty-incre"
                    value={value > 0 ? value : ''}
                    onChange={(e) => setValue(Number(e.target.value))}
                    sx={{
                      '& .MuiOutlinedInput-input': { p: 1.25 },
                      width: '33%',
                      '& .MuiOutlinedInput-root': { borderRadius: 0 }
                    }}
                  />
                  <Stack>
                    <Button
                      key="one"
                      color="secondary"
                      variant="outlined"
                      onClick={() => setValue(value + 1)}
                      sx={{
                        px: 0.5,
                        py: 0.35,
                        minWidth: '0px !important',
                        borderRadius: 0,
                        borderLeft: 'none',
                        '&:hover': { borderLeft: 'none', borderColor: theme.palette.secondary.light },
                        '&.Mui-disabled': { borderLeft: 'none', borderColor: theme.palette.secondary.light }
                      }}
                    >
                      <UpOutlined style={{ fontSize: 'small' }} />
                    </Button>
                    <Button
                      key="three"
                      color="secondary"
                      variant="outlined"
                      disabled={value <= 1}
                      onClick={() => setValue(value - 1)}
                      sx={{
                        px: 0.5,
                        py: 0.35,
                        minWidth: '0px !important',
                        borderRadius: 0,
                        borderTop: 'none',
                        borderLeft: 'none',
                        '&:hover': {
                          borderTop: 'none',
                          borderLeft: 'none',
                          borderColor: theme.palette.secondary.light
                        },
                        '&.Mui-disabled': {
                          borderTop: 'none',
                          borderLeft: 'none',
                          borderColor: theme.palette.secondary.light
                        }
                      }}
                    >
                      <DownOutlined style={{ fontSize: 'small' }} />
                    </Button>
                  </Stack>
                </Stack>
                {value === 0 && (
                  <FormHelperText sx={{ color: theme.palette.error.main }}>Please select quantity more than 0</FormHelperText>
                )}
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h3">${product.offerPrice}</Typography>
              {product.salePrice && (
                <Typography variant="h4" color="textSecondary" sx={{ textDecoration: 'line-through', opacity: 0.5, fontWeight: 400 }}>
                  ${product.salePrice}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 4 }}>
            <Button type="submit" fullWidth disabled={value < 1 || !product.isStock} color="primary" variant="contained" size="large">
              {!product.isStock ? 'Sold Out' : 'Buy Now'}
            </Button>
            {product.isStock && value > 0 && (
              <Button fullWidth color="secondary" variant="outlined" size="large" onClick={addCart}>
                Add to Cart
              </Button>
            )}
          </Stack>
        </Form>
      </FormikProvider>
    </Stack>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object
};

export default ProductInfo;
