import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import GrandPa from './components/GrandPa/GrandPa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: () => fetch('tshirts.json'),
          element:<Home></Home>
        }, 
        {
          path:'/orders', 
          element:<Orders></Orders>
        },
        {
          path:'/grandpa',
          element: <GrandPa></GrandPa>
        }
      ]
    }
  ])
  return ( 
    <div className="App">
      <RouterProvider  router={router}></RouterProvider>
    </div>
  );
}

export default App;
