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

const house = {
  id: 'group-huose',
  type: 'group',
  children: [
    {
      id: 'house',
      title: <FormattedMessage id="house" />,
      type: 'collapse',
      icon: icons.HomeOutlined,
      children: [
        {
          id: 'house',
          title: <FormattedMessage id="house" />,
          type: 'item',
          url: 'house',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default house;
