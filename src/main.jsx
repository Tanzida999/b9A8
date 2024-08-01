import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Root from './components/Root/Root.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/listedbooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/pagestoread',
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'book/:id',
        element:<BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
