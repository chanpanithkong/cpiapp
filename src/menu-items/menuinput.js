// third-party
import { FormattedMessage } from 'react-intl';

// ==============================|| MENU ITEMS - COMPONENTS ||============================== //

const menuItems = [
  {
    id: 'group-inputs',
    title: <FormattedMessage id="inputs" />,
    type: 'group',
    children: [
      {
        id: 'autocomplete',
        search: 'autocomplete, combo box, country select, grouped, multi select',
        title: <FormattedMessage id="autocomplete" />,
        type: 'item',
        url: '/components-overview/autocomplete'
      },
      {
        id: 'buttons',
        search: 'buttons, button group, icon button, toggle button, loading button',
        title: <FormattedMessage id="button" />,
        type: 'item',
        url: '/components-overview/buttons'
      },
      {
        id: 'checkbox',
        search: 'checkbox, indeterminate',
        title: <FormattedMessage id="checkbox" />,
        type: 'item',
        url: '/components-overview/checkbox'
      },
      {
        id: 'radio',
        search: 'radio',
        title: <FormattedMessage id="radio" />,
        type: 'item',
        url: '/components-overview/radio'
      },
      {
        id: 'rating',
        search: 'rating, star rating, feedback',
        title: <FormattedMessage id="rating" />,
        type: 'item',
        url: '/components-overview/rating'
      },
      {
        id: 'switch',
        search: 'switch',
        title: <FormattedMessage id="switch" />,
        type: 'item',
        url: '/components-overview/switch'
      },
      {
        id: 'select',
        search: 'select, multi-select',
        title: <FormattedMessage id="select" />,
        type: 'item',
        url: '/components-overview/select'
      },
      {
        id: 'slider',
        search: 'slider, range',
        title: <FormattedMessage id="slider" />,
        type: 'item',
        url: '/components-overview/slider'
      },
      {
        id: 'textfield',
        search: 'textfield, input, form input, search',
        title: <FormattedMessage id="text-field" />,
        type: 'item',
        url: '/components-overview/textfield'
      }
    ]
  }
];

export default menuItems;
