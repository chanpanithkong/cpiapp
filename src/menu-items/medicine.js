// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, GoldOutlined, HomeOutlined, MedicineBoxFilled } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  GoldOutlined,
  HomeOutlined,
  MedicineBoxFilled
};

// ==============================|| MENU ITEMS - DRINK AND SMOKE ||============================== //

const medicine = {
  id: 'group-medicine',
  //type: 'group',
  //id: 'group-applications',
  //title: <FormattedMessage id="applications" />,
  type: 'group',
  children: [
    {
      id: 'medicine',
      title: <FormattedMessage id="medicine" />,
      type: 'item',
      url: '/medicine',
      icon: icons.MedicineBoxFilled,
      breadcrumbs: false
    }
  ]
};

export default medicine;
