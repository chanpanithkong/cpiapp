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

// ==============================|| MENU ITEMS - FOOD ||============================== //

const houses = {
  id: 'huose',
  type: 'group',
  children: [
    {
      id: 'house',
      title: <FormattedMessage id="house" />,
      type: 'item',
      url: '/house',
      icon: icons.HomeOutlined
    }
  ]
};

export default houses;
