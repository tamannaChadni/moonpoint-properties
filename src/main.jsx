import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import Home from "./Pages/Home";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import PropertyDetails from "./component/PropertyDetails/PropertyDetails";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import PrivateRoute from "./component/Route/PrivateRoute";
import AboutUs from "./Pages/AboutUs/AboutUs";
import { HelmetProvider } from "react-helmet-async";
import UserProfile from "./Pages/UserProfile/UserProfile";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";

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
          
          fetch(
            "https://tamannachadni.github.io/properties-json-hosting/properties.json"
          ),
      },
      {
        path: "/property/:id",
        element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader: () =>
          fetch(
            "https://tamannachadni.github.io/properties-json-hosting/properties.json"
          ),
      },
      {
        path:"/user-profile",
        element:<UserProfile></UserProfile>,
      },
      {
        path:"/update-profile",
        element:<UpdateProfile></UpdateProfile>,
      },
      {
        path:"/about-us",
        element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
    {/* <App /> */}
  </React.StrictMode>
);
