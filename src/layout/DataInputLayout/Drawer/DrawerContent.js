import PropTypes from 'prop-types';

// project import
import SimpleBar from 'components/third-party/SimpleBar';
import Navigation from './Navigation';

// ==============================|| DRWAER CONTENT ||============================== //

const DrawerContent = () => (
  <SimpleBar
    sx={{
      height: { xs: 'calc(100vh - 70px)', md: 'calc(100% - 70px)' },
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column'
      }
    }}
  >
    <Navigation />
  </SimpleBar>
);

DrawerContent.propTypes = {
  searchValue: PropTypes.string
};

export default DrawerContent;
