// import React, { Component } from 'react';
//
// import Form from '../data-input/form-input';
//
// class DataInput extends Component {
//   render() {
//     return <Form onSubmit={this.result} />;
//   }
// }
//
// export default DataInput;
import { useEffect, useState } from 'react';
import ExchangeRateApi from '../../api/exchangeRateApi';

function App() {
  const { productlist, setProductList } = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await ExchangeRateApi.getAll(params);
        console.log('Fetch products successfully: ', response);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchProductList().then();
  }, [setProductList]);
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h2 productlist={productlist}></h2>;
}

export default App;
