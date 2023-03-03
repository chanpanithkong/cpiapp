// project import
//import applications from './applications';
import dashboard from './dashboard';
//import widget from './widget';
//import formsTables from './forms-tables';
//import chartsMap from './charts-map';
//import other from './other';
//import pages from './pages';
//import food from './food';
//import drinksmoke from './drinksmoke';
import administration from './administration';
import authorization from './authorization';
import datainput from './datainput';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    dashboard,
    datainput,
    authorization,
    administration
    // applications,
    // formsTables,
    // chartsMap,
    // pages,
    // other
  ]
};

export default menuItems;
