import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Home } from '@/pages/homepage'
import { DetailPage } from '@/pages/detail/index.tsx'
import { CommentSection } from '@/pages/comment'
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "post/:id",
    element: <DetailPage />,
  },
  {
    path: "/comments?postId=:postId",
    element: <CommentSection />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
