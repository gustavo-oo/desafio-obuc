import React from 'react';
import ReactDOM from 'react-dom/client';

import "./styles/Globals.scss";

import Sidebar from './components/Sidebar';

import routes from "./routes";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar />
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);
