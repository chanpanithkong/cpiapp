// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  BorderOutlined,
  BoxPlotOutlined,
  ChromeOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SmileOutlined,
  StopOutlined
} from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  MenuUnfoldOutlined,
  BoxPlotOutlined,
  StopOutlined,
  BorderOutlined,
  SmileOutlined,
  GatewayOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other = {
  id: 'other',
  title: <FormattedMessage id="others" />,
  type: 'group',
  children: [
    {
      id: 'home',
      title: 'Home',
      type: 'item',
      url: '/home',
      icon: icons.ChromeOutlined
    },
    {
      id: 'userprofile',
      title: 'User Profile',
      type: 'item',
      url: '/userpofile',
      icon: icons.ChromeOutlined
    },
    {
      id: 'logout',
      title: 'Logout',
      type: 'item',
      url: '/login',
      icon: icons.ChromeOutlined
    }
    // ,
    // {
    //   id: 'documentation',
    //   title: <FormattedMessage id="documentation" />,
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/',
    //   icon: icons.QuestionOutlined,
    //   external: true,
    //   target: true,
    //   chip: {
    //     label: 'gitbook',
    //     color: 'secondary',
    //     size: 'small'
    //   }
    // },
    // {
    //   id: 'roadmap',
    //   title: <FormattedMessage id="roadmap" />,
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/roadmap',
    //   icon: icons.DeploymentUnitOutlined,
    //   external: true,
    //   target: true
    // }
  ]
};

export default other;
