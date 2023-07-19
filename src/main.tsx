import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Home } from '@/pages/homepage'
import { Info } from '@/pages/info'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "info",
    element: <Info />,
  },
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />

  </React.StrictMode>,
)
