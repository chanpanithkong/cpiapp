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

const drinksmoke = {
  id: 'group-drinksmoke',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'drinksmoke',
      title: <FormattedMessage id="drinksmoke" />,
      type: 'item',
      url: '/food/ingredient',
      icon: icons.DashboardFilled,
      breadcrumbs: false
    }
  ]
};

export default drinksmoke;
