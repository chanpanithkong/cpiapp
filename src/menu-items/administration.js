// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { PieChartOutlined, UsergroupAddOutlined, SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  PieChartOutlined,
  UsergroupAddOutlined,
  SettingOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const administration = {
  id: 'group-administration',
  title: <FormattedMessage id="administration" />,
  type: 'group',
  children: [
    {
      id: 'role',
      title: <FormattedMessage id="role" />,
      type: 'item',
      url: '/maintenance/coming-soon',
      icon: icons.SettingOutlined
    },
    {
      id: 'user',
      title: <FormattedMessage id="user" />,
      type: 'item',
      url: '/user',
      icon: icons.UsergroupAddOutlined
    },
    {
      id: 'product',
      title: <FormattedMessage id="product" />,
      type: 'item',
      url: '/maintenance/coming-soon',
      icon: icons.PieChartOutlined
    }
  ]
};

export default administration;
