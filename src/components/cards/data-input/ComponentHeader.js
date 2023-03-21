import PropTypes from 'prop-types';

// material-ui
import { Box, Stack, Typography } from '@mui/material';

// ==============================|| COMPONENTS - BREADCRUMBS  ||============================== //

const ComponentHeader = ({ product }) => (
  <Box sx={{ pl: 0 }}>
    <Stack spacing={1}>
      <Typography variant="h2">{product.name}</Typography>
      <Typography>
        {/*<Chip
          size="small"
          label={product.isStock ? 'New' : 'Added for this batch'}
          sx={{
            width: 'fit-content',
            borderRadius: '4px',
            color: product.isStock ? 'success.main' : 'error.main',
            bgcolor: product.isStock ? 'success.lighter' : 'error.lighter'
          }}
        />*/}
      </Typography>
    </Stack>
  </Box>
);

ComponentHeader.propTypes = {
  product: PropTypes.object
};

export default ComponentHeader;
