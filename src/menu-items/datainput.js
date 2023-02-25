// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { RocketFilled, ShopFilled, SkinFilled, MedicineBoxFilled, HomeOutlined } from '@ant-design/icons';

// icons
const icons = {
  RocketFilled,
  ShopFilled,
  SkinFilled,
  MedicineBoxFilled,
  HomeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dataInput = {
  id: 'group-data-input',
  title: <FormattedMessage id="data-input" />,
  type: 'group',
  children: [
    {
      id: 'restaurants',
      title: <FormattedMessage id="restaurants" />,
      type: 'item',
      url: '/restaurants',
      icon: icons.ShopFilled
      //breadcrumbs: false
    },
    {
      id: 'clothes',
      title: <FormattedMessage id="cloth" />,
      type: 'item',
      url: '/clothes',
      icon: icons.SkinFilled
      //breadcrumbs: false
    },
    {
      id: 'transportation',
      title: <FormattedMessage id="transport" />,
      type: 'item',
      url: '/transportation',
      icon: icons.RocketFilled
      //breadcrumbs: false
    },
    {
      id: 'medicine',
      title: <FormattedMessage id="medicine" />,
      type: 'item',
      url: '/medicine',
      icon: icons.MedicineBoxFilled
      //breadcrumbs: false
    },
    {
      id: 'house',
      title: <FormattedMessage id="house" />,
      type: 'item',
      url: '/house',
      icon: icons.HomeOutlined
      //breadcrumbs: false
    }
  ]
};
export default dataInput;
