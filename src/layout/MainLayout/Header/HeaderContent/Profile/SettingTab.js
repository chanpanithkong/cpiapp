//import { useState } from 'react';

// material-ui
import { List } from '@mui/material';

// assets
//import { UserOutlined } from '@ant-design/icons';
import Customization from '../Customization';
import * as React from 'react';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <Customization />
    </List>
  );
};

export default SettingTab;
