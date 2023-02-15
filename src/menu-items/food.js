// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined
};

// ==============================|| MENU ITEMS - FOOD ||============================== //

const food = {
  id: 'group-food',
  type: 'group',
  children: [
    {
      id: 'food',
      title: <FormattedMessage id="food" />,
      type: 'collapse',
      icon: icons.DashboardOutlined,
      children: [
        {
          id: 'page1',
          title: <FormattedMessage id="page1" />,
          type: 'item',
          url: '/food/page1',
          breadcrumbs: false
        },
        {
          id: 'rice',
          title: <FormattedMessage id="rice" />,
          type: 'item',
          url: '/food/rice',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default food;
