


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Error from './Error/Error';
import Home from './Home/Home';
import Main from './Main/Main';
import Quiz from './Quiz/Quiz';
import Statistics from './Statistics/Statistics';
import Topics from './Topics/Topics';

function App() {

  const router = createBrowserRouter([

      {
        path:'/',
        element:<Main></Main>,
        
        errorElement:<Error></Error>,
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
            loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Topics ></Topics>
          },
          {
            path:'/statistics',
            loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Statistics></Statistics>
          },
          {
            path:'topic/:id',
            loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
            element:<Quiz></Quiz>,
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
