import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { projectLoader } from './apiCall/api.js';
import Error from './Components/error/Error.tsx';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    loader: projectLoader,
    errorElement: (
      <Error error={new Error('An error occurred while loading the page')} />
    ),
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
