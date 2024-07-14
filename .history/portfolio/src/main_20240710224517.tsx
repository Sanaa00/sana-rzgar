import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { projectLoader } from './apiCall/api.jsx';
export const router = createBrowserRouter([
  {
    path: '/'
  element: <App />
    loader: projectLoader
      errorElement={<ErrorPage />}
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
