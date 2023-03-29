// material-ui
import { Grid } from '@mui/material';
import DataInput from 'sections/forms/datainput';

<<<<<<< Updated upstream
import { useEffect, useState } from 'react';
import ExchangeRateApi from '../../api/exchangeRateApi';
import { getProducts } from 'store/reducers/ccyexchange';
import { useDispatch, useSelector } from 'store';

function App() {
  const [productlist, setProductList] = useState('');
  const fetchProductList = async () => {
    const params = {};
    const response = await ExchangeRateApi.get(params);
    //console.log('Fetch products successfully: ', response);
    return response;
  };
  useEffect(() => {
    fetchProductList()
      .then((response) => {
        setProductList(response.categories);
      })
      .catch((err) => {
        console.log('Fetch products error: ', err);
      });
  }, []);

  //Get API data

  const [dataProduct, setDataProduct] = useState([]);
  const { products } = useSelector((state) => state.user);
  const dispatch = useDispatch([]);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setDataProduct(products);
  }, [products]);
  console.log(dataProduct.login);

  //console.log(productlist)
  //   useEffect(() => {
  //   axios
  //     .get('http://172.16.17.171/api/productslist')
  //     .then((res) => {
  //       console.log(res.data)
  //       setProductList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(productlist)
  return (
    <div>
      {Array.isArray(productlist)
        ? productlist.map((data, index) => {
            return (
              <li key={index}>{data.nameen}</li>
              /*<Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h5">NBC Exchange Rate </Typography>
                  </Grid>
                  <Grid item />
                </Grid>
              </Grid>*/
            );
          })
        : null}

      {/* <div>{arr.dataProduct.map((data) => data.login.email)}</div> */}
      {/* {dataProduct.map((data) => data.login)}</div> */}
    </div>
  );
}
=======
// ==============================|| FORMS HOUSE ||============================== //

const dataInput = () => (
  <Grid container spacing={2.5}>
    <Grid item xs={12} md={12}>
      <DataInput />
    </Grid>
  </Grid>
);
>>>>>>> Stashed changes

export default dataInput;
