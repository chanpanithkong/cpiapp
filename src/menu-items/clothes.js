// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, SkinFilled } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  SkinFilled
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const clothes = {
  id: 'group-clothes',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'clothes',
      title: <FormattedMessage id="cloth" />,
      type: 'item',
      url: '/clothes',
      icon: icons.SkinFilled,
      breadcrumbs: false
    }
  ]
};

export default clothes;
