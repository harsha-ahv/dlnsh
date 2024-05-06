import logo from './logo.svg';
import './App.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
function App() {
  const routerObj=createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children:[
        {
          path: '/',
          element:<Home/>
        },
        {
          path:'/products',
          element:<Products/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={routerObj}/>
    </div>
  );
}

export default App;
