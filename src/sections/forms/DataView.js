import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Grid, List, ListItem, Stack, TableCell, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import MainCard from 'components/MainCard';

// ==============================|| CUSTOMER - VIEW ||============================== //

const CustomerView = ({ data }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <TableRow sx={{ '&:hover': { bgcolor: `transparent !important` } }}>
      <TableCell colSpan={8} sx={{ p: 2.5 }}>
        <Grid container spacing={2.5}>
          <Grid item xs={12} sm={7} md={8} lg={12}>
            <Stack spacing={2.5}>
              <MainCard title="Personal Details">
                <List sx={{ py: 0 }}>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Full Name</Typography>
                          <Typography>{data.fatherName}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Father Name</Typography>
                          <Typography>
                            Mr. {data.firstName} {data.lastName}
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem divider={!matchDownMD}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Country</Typography>
                          <Typography>{data.country}</Typography>
                        </Stack>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Stack spacing={0.5}>
                          <Typography color="secondary">Zip Code</Typography>
                          <Typography>
                            <NumberFormat displayType="text" format="### ###" mask="_" defaultValue={data.contact} />
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <Stack spacing={0.5}>
                      <Typography color="secondary">Address</Typography>
                      <Typography>{data.address}</Typography>
                    </Stack>
                  </ListItem>
                </List>
              </MainCard>
            </Stack>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

CustomerView.propTypes = {
  data: PropTypes.object
};

export default CustomerView;
