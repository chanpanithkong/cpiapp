// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  RocketFilled,
  ShopFilled,
  SkinFilled,
  MedicineBoxFilled,
  HomeOutlined,
  CoffeeOutlined,
  DollarOutlined,
  SecurityScanOutlined
} from '@ant-design/icons';

// icons
const icons = {
  RocketFilled,
  ShopFilled,
  SkinFilled,
  MedicineBoxFilled,
  HomeOutlined,
  CoffeeOutlined,
  DollarOutlined,
  SecurityScanOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dataInput = {
  id: 'group-data-input',
  title: <FormattedMessage id="data-input" />,
  type: 'group',
  children: [
    /*{
      id: 'food',
      title: <FormattedMessage id="food" />,
      type: 'collapse',
      icon: icons.DollarOutlined,
      children: [
        {
          id: 'rice',
          title: <FormattedMessage id="rice" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/rice'
          //breadcrumbs: false
        },
        {
          id: 'ingredient',
          title: <FormattedMessage id="ingredient" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/ingredient'
          //breadcrumbs: false
        },
        {
          id: 'meet',
          title: <FormattedMessage id="meet" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/meet'
          //breadcrumbs: false
        },
        {
          id: 'seafood',
          title: <FormattedMessage id="seafood" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/seafood'
          //breadcrumbs: false
        },
        {
          id: 'fruit',
          title: <FormattedMessage id="fruit" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/fruit'
          //breadcrumbs: false
        },
        {
          id: 'vegetable',
          title: <FormattedMessage id="vegetable" />,
          type: 'item',
          icon: icons.SecurityScanOutlined,
          url: '/food/vegetable'
          //breadcrumbs: false
        }
      ]
    },
    {
      id: 'drinksmoke',
      title: <FormattedMessage id="drinksmoke" />,
      type: 'item',
      url: '/drinksmoke',
      icon: icons.CoffeeOutlined
      //breadcrumbs: false
    },
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
    },*/
    {
      id: 'create-batch',
      title: <FormattedMessage id="create-batch" />,
      type: 'item',
      url: '/data-input',
      icon: icons.HomeOutlined,
      breadcrumbs: false
    }
  ]
};
export default dataInput;
