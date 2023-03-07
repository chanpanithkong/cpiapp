// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  UsergroupAddOutlined
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
      url: '/forms/user',
      icon: icons.UsergroupAddOutlined,
      breadcrumbs: false
    }
  ]
};

export default user;
