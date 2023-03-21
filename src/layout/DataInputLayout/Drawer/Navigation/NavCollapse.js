import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Collapse, ClickAwayListener, List, ListItemButton, ListItemText, Paper, Popper, Typography } from '@mui/material';

// project import
import NavItem from './NavItem';
import Transitions from 'components/@extended/Transitions';

// assets
import { DownOutlined, UpOutlined } from '@ant-design/icons';

// mini-menu - wrapper
const PopperStyled = styled(Popper)(({ theme }) => ({
  overflow: 'visible',
  zIndex: 1202,
  minWidth: 180,
  '&:before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 38,
    left: -5,
    width: 10,
    height: 10,
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(-50%) rotate(45deg)',
    zIndex: 120,
    borderLeft: `1px solid ${theme.palette.grey.A800}`,
    borderBottom: `1px solid ${theme.palette.grey.A800}`
  }
}));

// ==============================|| NAVIGATION - LIST COLLAPSE ||============================== //

const NavCollapse = ({ menu, level }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    setAnchorEl(null);
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    const childrens = menu.children ? menu.children : [];
    childrens.forEach((item) => {
      if (pathname && pathname.includes('product-details')) {
        if (item.url && item.url.includes('product-details')) {
          setOpen(true);
        }
      }

      if (item.url === pathname) {
        setOpen(true);
        setSelected(menu.id);
      }
    });
  }, [pathname, menu]);

  const openMini = Boolean(anchorEl);

  const navCollapse = menu.children?.map((item) => {
    switch (item.type) {
      case 'collapse':
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case 'item':
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Collapse or Item
          </Typography>
        );
    }
  });

  const textColor = theme.palette.mode === 'dark' ? 'grey.400' : 'text.primary';
  const iconSelectedColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.main;

  return (
    <>
      <ListItemButton
        disableRipple
        selected={selected === menu.id}
        {...{ onMouseEnter: handleClick, onMouseLeave: handleClose }}
        onClick={handleClick}
        sx={{
          pl: 4,
          py: 1,
          mb: 0.5,
          '&:hover': {
            bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter'
          },
          '&.Mui-selected': {
            bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter',
            borderRight: `2px solid ${theme.palette.primary.main}`,
            color: iconSelectedColor,
            '&:hover': {
              color: iconSelectedColor,
              bgcolor: theme.palette.mode === 'dark' ? 'divider' : 'primary.lighter'
            }
          }
        }}
      >
        <ListItemText
          primary={
            <Typography variant="h6" color={selected === menu.id ? 'primary' : textColor}>
              {menu.title}
            </Typography>
          }
          secondary={
            menu.caption && (
              <Typography variant="caption" color="secondary">
                {menu.caption}
              </Typography>
            )
          }
        />

        {openMini || open ? (
          <UpOutlined style={{ fontSize: '0.625rem', marginLeft: 1, color: theme.palette.primary.main }} />
        ) : (
          <DownOutlined style={{ fontSize: '0.625rem', marginLeft: 1 }} />
        )}

        <PopperStyled
          open={openMini}
          anchorEl={anchorEl}
          placement="right-start"
          style={{
            zIndex: 2001
          }}
          popperOptions={{
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [-12, 1]
                }
              }
            ]
          }}
        >
          {({ TransitionProps }) => (
            <Transitions in={openMini} {...TransitionProps}>
              <Paper
                sx={{
                  overflow: 'hidden',
                  mt: 1.5,
                  boxShadow: theme.customShadows.z1,
                  backgroundImage: 'none',
                  border: `1px solid ${theme.palette.divider}`
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <Box>{navCollapse}</Box>
                </ClickAwayListener>
              </Paper>
            </Transitions>
          )}
        </PopperStyled>
      </ListItemButton>
      {
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List sx={{ p: 0 }}>{navCollapse}</List>
        </Collapse>
      }
    </>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number
};

export default NavCollapse;
