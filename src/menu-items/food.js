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

const food = {
  id: 'group-food',
  type: 'group',
  children: [
    {
      id: 'food',
      title: <FormattedMessage id="food" />,
      type: 'collapse',
      icon: icons.DashboardFilled,
      children: [
        {
          id: 'rice',
          title: <FormattedMessage id="rice" />,
          type: 'item',
          url: '/food/rice',
          breadcrumbs: false
        },
        {
          id: 'ingredient',
          title: <FormattedMessage id="ingredient" />,
          type: 'item',
          url: '/food/ingredient',
          breadcrumbs: false
        },
        {
          id: 'meet',
          title: <FormattedMessage id="meet" />,
          type: 'item',
          url: '/food/meet',
          breadcrumbs: false
        },
        {
          id: 'seafood',
          title: <FormattedMessage id="seafood" />,
          type: 'item',
          url: '/food/seafood',
          breadcrumbs: false
        },
        {
          id: 'fruit',
          title: <FormattedMessage id="fruit" />,
          type: 'item',
          url: '/maintenance/coming-soon',
          breadcrumbs: false
        },
        {
          id: 'vegetable',
          title: <FormattedMessage id="vegetable" />,
          type: 'item',
          url: '/maintenance/coming-soon',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default food;
