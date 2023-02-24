// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, ShopFilled } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  ShopFilled
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const restaurants = {
  id: 'group-restaurants',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'restaurants',
      title: <FormattedMessage id="resturant" />,
      type: 'item',
      url: '/restaurants',
      icon: icons.ShopFilled,
      breadcrumbs: false
    }
  ]
};

export default restaurants;
