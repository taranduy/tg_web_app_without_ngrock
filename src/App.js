import logo from './logo.svg';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';
import { useTelegram } from './hooks/useTelegram'
import { useEffect } from 'react'



const router = createBrowserRouter([
  {
    path: '/',
    element: 
      <div>
        <h1>
          header
        </h1>
        <Outlet />
      </div>,
      children: [
        {
          path: '/catalog',
          element: <Catalog />
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
