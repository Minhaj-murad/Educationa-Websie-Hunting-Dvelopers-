
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Main from './Main/Main';
import Statistics from './Statistics/Statistics';
import Topic from './Topic/Topic';






function App() {
  const router = createBrowserRouter([

      {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/home',
            element:<Home></Home>
          },
          {
            path:'/topic',
            element:<Topic></Topic>
          },
          {
            path:'/statistics',
            element:<Statistics></Statistics>
          },
          {
            path:'/blogs',
            element:<Blog></Blog>
          },
        ]
      }



  ])
 
  return (
    <div className="App">
  
            
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
