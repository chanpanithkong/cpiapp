//import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// material-ui
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Stack } from '@mui/material';
import { EditOutlined, DeleteOutlined, EyeTwoTone } from '@ant-design/icons';
import IconButton from 'components/@extended/IconButton';
// project imports
import MainCard from 'components/MainCard';

//get api
import { useDispatch, useSelector } from 'store';
import { getProducts } from 'store/reducers/products';

export default function Product() {
  //Get API data
const [dataProduct, setDataProduct] = useState([]);
const { products } = useSelector((state) => state.pro);
const dispatch = useDispatch([]);

useEffect(() => {
dispatch(getProducts());
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
useEffect(() => {
setDataProduct(products);
}, [products]);
console.log(dataProduct);
  return (
    <MainCard content={false} title="គ្រប់គ្រងទំនិញ">
      {/* table */}
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">#ID</TableCell>
              <TableCell sx={{ pl: 3 }}>Product Name</TableCell>
              <TableCell align="right">Category Name</TableCell>
              <TableCell align="right">Product Detail</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataProduct.map((dataProduct) => (
              <TableRow hover key={dataProduct.prodid}>
                <TableCell align="right">{dataProduct.prodid}</TableCell>
                <TableCell sx={{ pl: 3 }} component="th" scope="row">
                  {dataProduct.namekh}
                </TableCell>
                <TableCell align="right">{dataProduct.catid}</TableCell>
                <TableCell align="right">{dataProduct.details}</TableCell>
                <TableCell align="center" sx={{ pr: 3 }}>
                  <Stack direction="row" justifyContent="center" alignItems="center">
                    <IconButton color="inherit" size="large">
                      <EyeTwoTone />
                    </IconButton>
                    <IconButton color="primary" size="large">
                      <EditOutlined />
                    </IconButton>
                    <IconButton color="inherit" size="large">
                      <DeleteOutlined />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
