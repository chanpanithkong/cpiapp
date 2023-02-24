// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  SettingOutlined
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
      url: '/maintenance/coming-soon',
      icon: icons.SettingOutlined,
      breadcrumbs: false
    }
  ]
};

export default role;
