// material-ui
import { Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| LAYOUTS - BASIC ||============================== //
function Layouts() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={12}>
        <MainCard>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                1. Water:
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter full name" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                2. Electricity:
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter full name" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" component="div" sx={{ mb: 3 }}>
                2. Gas:
              </Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter full name" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
                <Grid item xs={12} sm={9} lg={3}>
                  <TextField fullWidth placeholder="Enter email" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={1} justifyContent="center" sx={{ width: 1, px: 1.5, py: 0.75 }}>
              <Button color="error" size="small">
                Cancel
              </Button>
              <Button variant="contained" size="small">
                Submit
              </Button>
            </Stack>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
}

export default Layouts;
