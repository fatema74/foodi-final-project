import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Shop-pages/Menu';
import Signup from '../componentes/Signup';
import PrivetRouter from '../PrivetRout/PrivetRouter';
import UpdateProfile from '../Pages/Dasbord/UpdateProfile';
import CartPage from '../Pages/Shop-pages/CartPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/menu',
        element: <PrivetRouter>
          <Menu></Menu>
        </PrivetRouter>,
      },
      {
        path: '/cart-page',
        element: <CartPage></CartPage>
      },
      {
        path: '/update-profile',
        element: <UpdateProfile/>
      }
    ],
  },
  {
    path: '/signup',
    element: <Signup></Signup>
  }
]);
export default router;
