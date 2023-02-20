// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, SettingFilled } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  SettingFilled
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const role = {
  id: 'group-role',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'role',
      title: <FormattedMessage id="role" />,
      type: 'item',
      url: '/food/ingredient',
      icon: icons.SettingFilled,
      breadcrumbs: false
    }
  ]
};

export default role;
