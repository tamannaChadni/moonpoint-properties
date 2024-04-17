import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import SortedBook from "./component/SortedBook/SortedBook";


import MainLayout from "./component/Layout/MainLayout";
import Home from "./Pages/Home";
import BookDetails from "./component/BookDetails/BookDetails";
import ErrorPage from "./component/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          // fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
          fetch("https://tamannachadni.github.io/properties-json-hosting/properties.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () =>
          fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
      },
      // {
      
      //   path: "/listed-book",
      //   element: <SortedBook></SortedBook>,
      //   loader: () =>
      //     fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
      // },
      
      
      
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
