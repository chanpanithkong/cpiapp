// material-ui
import { Autocomplete, Button, Divider, Grid, InputLabel, Stack, TextField } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| LAYOUTS - BASIC ||============================== //
const ccy = [
  { label: 'KHR', id: 116 },
  { label: 'USD', id: 840 }
];

const uom = [
  { label: 'm3', id: 116 },
  { label: 'other', id: 840 }
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
                  <InputLabel alignItems="center">1. Men Clothes:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter full name" />*/}
                  <TextField fullWidth id="outlined-basic" label="Quantity" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={uom}
                    renderInput={(params) => <TextField {...params} label="Unit" />}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-basic" label="Price" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ccy}
                    renderInput={(params) => <TextField {...params} label="Currency" />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">2. Women Clothes:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter full name" />*/}
                  <TextField fullWidth id="outlined-basic" label="Quantity" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={uom}
                    renderInput={(params) => <TextField {...params} label="Unit" />}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-basic" label="Price" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ccy}
                    renderInput={(params) => <TextField {...params} label="Currency" />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">3. Kids Clothes:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter full name" />*/}
                  <TextField fullWidth id="outlined-basic" label="Quantity" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={uom}
                    renderInput={(params) => <TextField {...params} label="Unit" />}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-basic" label="Price" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ccy}
                    renderInput={(params) => <TextField {...params} label="Currency" />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={2}>
                  <InputLabel alignItems="center">4. Shoe:</InputLabel>
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter full name" />*/}
                  <TextField fullWidth id="outlined-basic" label="Quantity" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={uom}
                    renderInput={(params) => <TextField {...params} label="Unit" />}
                  />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  {/*<TextField fullWidth placeholder="Enter email" />*/}
                  <TextField fullWidth id="outlined-basic" label="Price" type="number" />
                </Grid>
                <Grid item xs={12} sm={9} lg={2}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={ccy}
                    renderInput={(params) => <TextField {...params} label="Currency" />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1} justifyContent="right" sx={{ width: 1, px: 1.5, py: 0.75 }}>
                <Button color="error" size="small">
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
