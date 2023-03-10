// material-ui
import { Button, Divider, Grid, InputLabel, MenuItem, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';
import { useState } from 'react';

// ==============================|| LAYOUTS - BASIC ||============================== //
const currencies = [
  { value: 'KHR', label: '៛', id: 116, key: 1 },
  { value: 'USD', label: '$', id: 840, key: 1 }
];

const uom = [
  { value: 'm3', label: 'm³', id: 1, key: 1 },
  { value: 'kwh', label: 'Kwh', id: 2, key: 1 },
  { value: 'litter', label: 'Litter', id: 3, key: 1 },
  { value: 'kg', label: 'Kg', id: 4, key: 1 },
  { value: 'month', label: 'Month', id: 5, key: 1 },
  { value: 'other', label: 'Other', id: 6, key: 1 }
];

// const items = [
//   {
//     key: '1',
//     name: 'House'
//   },
//   {
//     key: '2',
//     name: 'Electric'
//   },
//   {
//     key: '3',
//     name: 'Water'
//   },
//   {
//     key: '4',
//     name: 'Gas'
//   }
// ];

function Layouts() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Grid container spacing={3} alignitems="center">
            <Grid item xs={12}>
              <Grid container spacing={2} alignitems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignitems="center">Rental Fee:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField
                    fullWidth
                    value={message}
                    onChange={handleChange}
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-select-unit" select label="Unit" defaultValue="other">
                    {uom.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField
                    fullWidth
                    id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <TextField fullWidth id="outlined-select-currency" select label="Currency" defaultValue="KHR">
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignitems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignitems="center">Water Bill:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField
                    fullWidth
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-select-unit" select label="Unit" defaultValue="other">
                    {uom.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField
                    fullWidth
                    id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <TextField fullWidth id="outlined-select-currency" select label="Currency" defaultValue="KHR">
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignitems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignitems="center">Electric Bill:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter full name" />*/}
                  {/*<TextField fullWidth id="outlined-basic" label="Quantity" type="number" />*/}
                  <TextField fullWidth id="outlined-number" label="Quantity" type="number" defaultValue="other" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-select-unit" select label="Unit" defaultValue="other">
                    {uom.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField
                    fullWidth
                    id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <TextField fullWidth id="outlined-select-currency" select label="Currency" defaultValue="KHR">
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignitems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignitems="center">Gas Bill:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter full name" />*/}
                  {/*<TextField fullWidth id="outlined-basic" label="Quantity" type="number" />*/}
                  <TextField
                    fullWidth
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-select-unit" select label="Unit" defaultValue="other">
                    {uom.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField
                    fullWidth
                    id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <TextField fullWidth id="outlined-select-currency" select label="Currency" defaultValue="KHR">
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1} justifyContent="right" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                <Button variant="contained" size="small">
                  Save
                </Button>
                <Button variant="contained" color="error" onClick={() => setMessage('')}>
                  Reset
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
}

export default Layouts;
