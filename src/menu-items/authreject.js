// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, AuditOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  AuditOutlined
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const authreject = {
  id: 'group-authreject',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'authreject',
      title: <FormattedMessage id="authreject" />,
      type: 'item',
      url: '/maintenance/coming-soon',
      icon: icons.AuditOutlined,
      breadcrumbs: false
    }
  ]
};

export default authreject;
