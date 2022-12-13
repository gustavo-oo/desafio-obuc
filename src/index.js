import React from 'react';
import ReactDOM from 'react-dom/client';

import "styles/Globals.scss";

import routes from "config/routes";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="dialog-div" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
