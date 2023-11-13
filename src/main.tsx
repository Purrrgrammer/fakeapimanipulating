import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/homepage";
import { DetailPage } from "@/pages/detail/index.tsx";
import { AccountPage } from "@/pages/account/index.tsx";
import { CommentSection } from "@/pages/comment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "post/:id",
        element: <DetailPage />,
      },
      {
        path: "/comments?postId=:postId",
        element: <CommentSection />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
