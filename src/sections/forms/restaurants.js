// material-ui
import { Button, Divider, Grid, InputLabel, MenuItem, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| LAYOUTS - BASIC ||============================== //
const currencies = [
  { value: 'KHR', label: '៛', id: 116, key: 1 },
  { value: 'USD', label: '$', id: 840, key: 1 }
];

const uom = [
  { label: 'Dish', id: 1 },
  { label: 'other', id: 6 }
];

function Layouts() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">1. គុយទាវ(ពេលព្រឹក):</InputLabel>
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
                  <TextField fullWidth id="outlined-select-currency" select label="Unit" defaultValue="KHR">
                    {uom.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
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
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">2. បាយម្ហូបកម្មង់ថ្ងៃត្រង់:</InputLabel>
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
                  <TextField fullWidth id="outlined-select-currency" select label="Unit" defaultValue="KHR">
                    {uom.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
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
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">3. សាច់គោអាំង:</InputLabel>
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
                  <TextField fullWidth id="outlined-select-currency" select label="Unit" defaultValue="KHR">
                    {uom.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
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
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">4. បាយសាច់មាន់:</InputLabel>
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
                  <TextField fullWidth id="outlined-select-currency" select label="Unit" defaultValue="KHR">
                    {uom.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
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
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">5. បាយសាច់ជ្រូក:</InputLabel>
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
                  <TextField fullWidth id="outlined-select-currency" select label="Unit" defaultValue="KHR">
                    {uom.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
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
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">6. បបរគ្រឿង:</InputLabel>
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
                  <TextField fullWidth id="outlined-select-currency" select label="Unit" defaultValue="KHR">
                    {uom.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
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
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">7. ស៊ុប:</InputLabel>
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
                  <TextField fullWidth id="outlined-select-currency" select label="Unit" defaultValue="KHR">
                    {uom.map((option) => {
                      return (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      );
                    })}
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
                <Button variant="contained" color="error">
                  Reset
                </Button>
                <Button variant="contained" size="small">
                  Save
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
