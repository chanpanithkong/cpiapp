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

const cloth = {
  id: 'group-cloth',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'cloth',
      title: <FormattedMessage id="cloth" />,
      type: 'item',
      url: '/food/ingredient',
      icon: icons.DashboardFilled,
      breadcrumbs: false
    }
  ]
};

export default cloth;
