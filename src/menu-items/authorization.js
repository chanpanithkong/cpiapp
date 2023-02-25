// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { FundViewOutlined, AuditOutlined } from '@ant-design/icons';

// icons
const icons = {
  FundViewOutlined,
  AuditOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const authorization = {
  id: 'group-authorization',
  title: <FormattedMessage id="authorization" />,
  type: 'group',
  children: [
    {
      id: 'authreject',
      title: <FormattedMessage id="authreject" />,
      type: 'item',
      url: '/maintenance/coming-soon',
      icon: icons.AuditOutlined
    },
    {
      id: 'reviewdata',
      title: <FormattedMessage id="reviewdata" />,
      type: 'item',
      url: '/apps/customer/list',
      icon: icons.FundViewOutlined
    }
  ]
};

export default authorization;
