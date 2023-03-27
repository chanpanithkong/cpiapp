import { useEffect, useState } from 'react';
import axios from 'axios';
//import { Grid, Typography } from '@mui/material';
const parseString = require('xml2js').parseString;

function MyComponent() {
  //const [count, setCount] = useState(0);
  const [exchangerate, setExchangerate] = useState(0);

  useEffect(() => {
    // This function will only run when the component is mounted
    // and every time the count state changes.
    //const convert = require('xml-js');
    axios
      .get('/api/exRate.php')
      .then((res) => {
        //const data = JSON.parse(convert.xml2json(res.data, { compact: true, spaces: 2 }));
        //console.log(res.data);
        parseString(res.data, (err, result) => {
          //console.log(result);
          // console.log(JSON.stringify(result['soap:Envelope']['soap:Body']))
          setExchangerate(result.ExchangeRate.ex);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //console.log(exchangerate);
  return (
    <div>
      {Array.isArray(exchangerate)
        ? exchangerate.map((data, index) => {
            return (
              <li key={index}>{data.date}</li>
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
    </div>
  );
}

export default MyComponent;
