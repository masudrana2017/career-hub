import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobsDetails from './components/JobDetails/JobsDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/job/:id",
        element:<JobsDetails></JobsDetails>,
        loader:()=>fetch('jobs.json')
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('jobs.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
