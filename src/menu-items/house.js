// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, DashboardFilled } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  DashboardFilled
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const house = {
  id: 'group-house',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'house',
      title: <FormattedMessage id="house" />,
      type: 'item',
      url: '/food/ingredient',
      icon: icons.DashboardFilled,
      breadcrumbs: false
    }
  ]
};

export default house;
