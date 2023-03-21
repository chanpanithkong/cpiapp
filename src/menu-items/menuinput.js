// third-party
import { FormattedMessage } from 'react-intl';

// ==============================|| MENU ITEMS - COMPONENTS ||============================== //

const menuItems = [
  {
    id: 'group-inputs',
    title: <FormattedMessage id="inputs" />,
    type: 'group',
    children: [
      /*{
        id: 'food',
        search: 'food, mlis',
        title: <FormattedMessage id="food" />,
        type: 'collapse',
        children: [
          {
            id: 'rice',
            title: <FormattedMessage id="rice" />,
            type: 'item',
            url: '/data-input/6'
          },
          {
            id: 'meat',
            title: <FormattedMessage id="meat" />,
            type: 'item',
            url: '/data-input/7'
          }
        ]
      },*/
      {
        id: 'drinksmoke',
        search: 'drinksmoke',
        title: <FormattedMessage id="drinksmoke" />,
        type: 'item',
        url: '/data-input/9'
      },
      {
        id: 'restaurants',
        search: 'restaurants, indeterminate',
        title: <FormattedMessage id="restaurants" />,
        type: 'item',
        url: '/data-input/8'
      },
      {
        id: 'cloth',
        search: 'radio',
        title: <FormattedMessage id="cloth" />,
        type: 'item',
        url: '/data-input/7'
      },
      {
        id: 'transport',
        search: 'transport, star rating, feedback',
        title: <FormattedMessage id="transport" />,
        type: 'item',
        url: '/components-overview/rating'
      },
      {
        id: 'medicine',
        search: 'medicine',
        title: <FormattedMessage id="medicine" />,
        type: 'item',
        url: '/components-overview/switch'
      },
      {
        id: 'house',
        search: 'select, multi-select',
        title: <FormattedMessage id="house" />,
        type: 'item',
        url: '/components-overview/select'
      }
    ]
  }
];

export default menuItems;
