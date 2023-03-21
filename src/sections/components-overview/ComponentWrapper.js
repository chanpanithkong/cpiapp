// material-ui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// ==============================|| COMPONENTS - CONTENT WRAPPER ||============================== //

const ComponentWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingTop: theme.spacing(0),
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5)
  }
}));

export default ComponentWrapper;
