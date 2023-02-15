// material-ui
import { Container, Link, Stack, Typography, useMediaQuery } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="xl">
      <Stack
        direction={matchDownSM ? 'column' : 'row'}
        justifyContent={matchDownSM ? 'center' : 'space-between'}
        spacing={2}
        textAlign={matchDownSM ? 'center' : 'inherit'}
      >
        <Typography variant="subtitle2" color="secondary" component="span">
          This site is protected by{' '}
            <Typography component={Link} variant="subtitle2" href="https://www.nbc.gov.kh/" target="_blank" underline="hover">
            National Bank of Cambodia
          </Typography>
        </Typography> 

        <Stack direction={matchDownSM ? 'column' : 'row'} spacing={matchDownSM ? 1 : 3} textAlign={matchDownSM ? 'center' : 'inherit'}>
           <Typography variant="subtitle2" color="secondary" underline="hover">2023 &copy; All rights reserved </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AuthFooter;
