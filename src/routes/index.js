// import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
// import CommonLayout from 'layout/CommonLayout';
// import Loadable from 'components/Loadable';
import ComponentsRoutes from './ComponentsRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import DataInputRoutes from './DataInputRoutes';

// render - landing page
// const PagesLanding = Loadable(lazy(() => import('pages/landing')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, LoginRoutes, ComponentsRoutes, DataInputRoutes]);
}
