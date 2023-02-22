// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, RocketFilled } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  RocketFilled
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const transport = {
  id: 'group-transport',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'transport',
      title: <FormattedMessage id="transport" />,
      type: 'item',
      url: '/maintenance/coming-soon',
      icon: icons.RocketFilled,
      breadcrumbs: false
    }
  ]
};

export default transport;
