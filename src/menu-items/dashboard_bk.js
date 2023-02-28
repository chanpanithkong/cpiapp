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

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="dashboard" />,
      type: 'collapse',
      icon: icons.DashboardOutlined,
      children: [
        {
          id: 'homepage',
          title: <FormattedMessage id="homepage" />,
          type: 'item',
          url: '/dashboard/default',
          breadcrumbs: false
        },
        {
          id: 'analytics',
          title: <FormattedMessage id="analytics" />,
          type: 'item',
          //url: '/dashboard/analytics'
          url: '/maintenance/under-construction'
        }
      ]
    }
    // ,{
    //   id: 'components',
    //   title: <FormattedMessage id="components" />,
    //   type: 'item',
    //   url: '/components-overview/buttons',
    //   icon: icons.GoldOutlined,
    //   target: true,
    //   chip: {
    //     label: 'new',
    //     color: 'primary',
    //     size: 'small',
    //     variant: 'combined'
    //   }
    // }
  ]
};

export default dashboard;
