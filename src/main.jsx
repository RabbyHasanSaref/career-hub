import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Error from './component/ErrorPage/Error.jsx';
import JobInfo from './component/JobInfo/JobInfo.jsx';
import AppliedJob from './component/AppliedJob/AppliedJob.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },

      {
        path: "/job/:id",
        element: <JobInfo></JobInfo>,
        loader: () => fetch('../jobs.json')
      },

      {
        path: "/appliedjobs",
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
