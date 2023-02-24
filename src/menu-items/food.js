// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, DollarOutlined, SecurityScanOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  DollarOutlined,
  SecurityScanOutlined
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
      icon: icons.DollarOutlined,
      children: [
        {
          id: 'rice',
          title: <FormattedMessage id="rice" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/rice',
          breadcrumbs: false
        },
        {
          id: 'ingredient',
          title: <FormattedMessage id="ingredient" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/ingredient',
          breadcrumbs: false
        },
        {
          id: 'meet',
          title: <FormattedMessage id="meet" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/meet',
          breadcrumbs: false
        },
        {
          id: 'seafood',
          title: <FormattedMessage id="seafood" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/seafood',
          breadcrumbs: false
        },
        {
          id: 'fruit',
          title: <FormattedMessage id="fruit" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/fruit',
          breadcrumbs: false
        },
        {
          id: 'vegetable',
          title: <FormattedMessage id="vegetable" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/vegetable',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default food;
