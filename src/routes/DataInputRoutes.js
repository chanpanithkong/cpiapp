import AuthGuard from '../utils/route-guard/AuthGuard';
//import MainLayout from '../layout/MainLayout';
import Loadable from '../components/Loadable';
import { lazy } from 'react';
import CommonLayout from '../layout/DataInputLayout';
const AppECommProductDetails = Loadable(lazy(() => import('pages/apps/data-input/input')));

const DataInputRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <CommonLayout layout="component" />
        </AuthGuard>
      ),
      children: [
        {
          path: 'data-input/:id',
          element: <AppECommProductDetails />
        }
      ]
    }
  ]
};
export default DataInputRoutes;
