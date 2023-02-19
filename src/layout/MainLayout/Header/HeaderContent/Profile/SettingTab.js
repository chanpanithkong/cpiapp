import { useState } from 'react';

// material-ui
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// assets
import { UserOutlined } from '@ant-design/icons';
import Customization from '../Customization';

// ==============================|| HEADER PROFILE - SETTING TAB ||============================== //

const SettingTab = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
      <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="Account Settings" />
      </ListItemButton>
      <Customization />
    </List>
  );
};

export default SettingTab;
