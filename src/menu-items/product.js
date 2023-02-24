// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, PieChartOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  PieChartOutlined
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const product = {
  id: 'group-product',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'product',
      title: <FormattedMessage id="product" />,
      type: 'item',
      url: '/maintenance/coming-soon',
      icon: icons.PieChartOutlined,
      breadcrumbs: false
    }
  ]
};

export default product;
