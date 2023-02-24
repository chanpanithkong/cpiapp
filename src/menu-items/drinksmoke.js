// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, CoffeeOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  CoffeeOutlined
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
      url: '/drinksmoke',
      icon: icons.CoffeeOutlined,
      breadcrumbs: false
    }
  ]
};

export default drinksmoke;
