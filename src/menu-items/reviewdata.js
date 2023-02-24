// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, FundViewOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  FundViewOutlined
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const reviewdata = {
  id: 'group-reviewdata',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'reviewdata',
      title: <FormattedMessage id="reviewdata" />,
      type: 'item',
      url: '/maintenance/coming-soon',
      icon: icons.FundViewOutlined,
      breadcrumbs: false
    }
  ]
};

export default reviewdata;
