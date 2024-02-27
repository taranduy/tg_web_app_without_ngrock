import logo from './logo.svg';
import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';


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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
