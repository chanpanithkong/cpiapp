// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, FileTextFilled } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  FileTextFilled
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
      url: '/food/ingredient',
      icon: icons.FileTextFilled,
      breadcrumbs: false
    }
  ]
};

export default reviewdata;
