// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const user = {
  id: 'group-user',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'user',
      title: <FormattedMessage id="user" />,
      type: 'item',
      url: '/food/ingredient',
      icon: icons.UserOutlined,
      breadcrumbs: false
    }
  ]
};

export default user;
