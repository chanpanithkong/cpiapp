import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// material-ui
//import { useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Stack } from '@mui/material';

// project imports
import FloatingCart from 'components/cards/e-commerce/FloatingCart';
//import ProductImages from 'sections/apps/e-commerce/product-details/ProductImages';
//import ProductInfo from 'sections/apps/e-commerce/product-details/ProductInfo';
import FormInput from './form-input';
import MainCard from 'components/MainCard';
import { useDispatch, useSelector } from 'store';
import { getProduct } from 'store/reducers/product';
import { resetCart } from 'store/reducers/cart';
import ComponentHeader from '../../../components/cards/data-input/ComponentHeader';
import ComponentWrapper from '../../../sections/components-overview/ComponentWrapper';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-details-tabpanel-${index}`}
      aria-labelledby={`product-details-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

// function a11yProps(index) {
//   return {
//     id: `product-details-tab-${index}`,
//     'aria-controls': `product-details-tabpanel-${index}`
//   };
// }

// ==============================|| PRODUCT DETAILS - MAIN ||============================== //

const ProductDetails = () => {
  //const theme = useTheme();
  const { id } = useParams();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // product description tabs
  //const [ setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));

    // clear cart if complete order
    if (cart.checkout.step > 2) {
      dispatch(resetCart());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <ComponentWrapper>
        {product && product.id === Number(id) && <ComponentHeader product={product} />}
        {product && product.id === Number(id) && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MainCard>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <FormInput product={product} />
                  </Grid>
                </Grid>
              </MainCard>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2} justifyContent="right" sx={{ width: 1, px: 1, py: 0 }}>
                <Button variant="contained" size="small">
                  Save
                </Button>
                <Button variant="contained" color="error">
                  Reset
                </Button>
              </Stack>
            </Grid>
          </Grid>
        )}
        <FloatingCart />
      </ComponentWrapper>
    </>
  );
};

export default ProductDetails;
