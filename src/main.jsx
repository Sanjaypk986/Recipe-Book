import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import Home from './components/pages/Home/Home';
import RecipeDetails from './components/pages/Home/RecipeDetails';
import Indian from './components/pages/Indian';
import Italian from './components/pages/Italian';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/indian",
        element: <Indian />,
      },
      {
        path: "/italian",
        element: <Italian />,
      },
      {
        path: "recipe/:recipeId",
        element: <RecipeDetails />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
