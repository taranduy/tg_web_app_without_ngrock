import logo from './logo.svg';
import './App.css';
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { useTelegram } from './hooks/useTelegram'
import { useEffect } from 'react'
import { UserStore } from './components/UserStore/UserStore';



const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <div>
        <h1>
          <Link to={'/catalog'} >catalog </Link>
          <Link to={'/user_store'}>user_store </Link>

        </h1>
        <Outlet />
      </div>,
      children: [
        {
          path: '/catalog',
          element: <Catalog />
        },
        {
          path: '/user_store',
          element: <UserStore />
        }
      ]
  }
])
function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
      tg.ready();
  }, [])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
