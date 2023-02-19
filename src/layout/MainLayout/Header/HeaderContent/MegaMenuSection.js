import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Button,
  Box,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Popper,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';
import { drawerWidth } from 'config';

// assets
import { ArrowRightOutlined, WindowsOutlined } from '@ant-design/icons';
import AnimateButton from 'components/@extended/AnimateButton';
import { FormattedMessage } from 'react-intl';
//import { FormattedMessage } from 'react-intl';

// ==============================|| HEADER CONTENT - MEGA MENU SECTION ||============================== //

const MegaMenuSection = () => {
  const theme = useTheme();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const iconBackColorOpen = theme.palette.mode === 'dark' ? 'grey.200' : 'grey.300';
  const iconBackColor = theme.palette.mode === 'dark' ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <WindowsOutlined />
      </IconButton>
      <Popper
        placement="bottom"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-180, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            <Paper
              sx={{
                minWidth: 600,
                width: {
                  md: `calc(100vw - 100px)`,
                  lg: `calc(100vw - ${drawerWidth + 100}px)`,
                  xl: `calc(100vw - ${drawerWidth + 140}px)`
                },
                maxWidth: 600
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MainCard elevation={0} border={false} content={false}>
                  <Grid container>
                    <Grid item md={12}>
                      <Box
                        sx={{
                          p: 4,
                          '& .MuiList-root': {
                            pb: 0
                          },
                          '& .MuiListSubheader-root': {
                            p: 0,
                            pb: 1.5
                          },
                          '& .MuiListItemButton-root': {
                            p: 0.5,
                            '&:hover': {
                              background: 'transparent',
                              '& .MuiTypography-root': {
                                color: 'primary.main'
                              }
                            }
                          }
                        }}
                      >
                        <Grid container spacing={1}>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="textPrimary" className="authentication">
                                    <FormattedMessage id="authentication" />
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component={Link} target="_blank" to="/auth/login">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                              </ListItemButton>
                              <ListItemButton disableRipple component={Link} target="_blank" to="/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="About us" />
                              </ListItemButton>
                              <ListItemButton disableRipple component={Link} target="_blank" to="/contact-us">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Contact us" />
                              </ListItemButton>
                              <ListItemButton disableRipple component={Link} to="/pricing">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Pricing" />
                              </ListItemButton>
                            </List>
                          </Grid>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="textPrimary">
                                    Other Pages
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component={Link} to="/apps/profiles/user/payment">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Payment" />
                              </ListItemButton>
                              <ListItemButton disableRipple component={Link} target="_blank" to="/maintenance/under-construction">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Construction" />
                              </ListItemButton>
                              <ListItemButton disableRipple component={Link} target="_blank" to="/maintenance/coming-soon">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Coming Soon" />
                              </ListItemButton>
                            </List>
                          </Grid>
                          <Grid item xs={4}>
                            <List
                              component="nav"
                              aria-labelledby="nested-list-user"
                              subheader={
                                <ListSubheader id="nested-list-user">
                                  <Typography variant="subtitle1" color="textPrimary" className="saas-pages">
                                    <FormattedMessage id="saas-pages" />
                                  </Typography>
                                </ListSubheader>
                              }
                            >
                              <ListItemButton disableRipple component={Link} target="_blank" to="/maintenance/404">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="404 Error" />
                              </ListItemButton>
                              <ListItemButton disableRipple component={Link} target="_blank" to="/">
                                <ListItemIcon>
                                  <Dot size={7} color="secondary" variant="outlined" />
                                </ListItemIcon>
                                <ListItemText primary="Landing" />
                              </ListItemButton>
                              <AnimateButton>
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  sx={{
                                    bgcolor: 'background.paper',
                                    color: 'text.primary',
                                    '&:hover': { bgcolor: 'background.paper', color: 'text.primary' }
                                  }}
                                  endIcon={<ArrowRightOutlined />}
                                  component={Link}
                                  to="/components-overview/buttons"
                                  target="_blank"
                                >
                                  View All
                                </Button>
                              </AnimateButton>
                            </List>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </MainCard>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default MegaMenuSection;
