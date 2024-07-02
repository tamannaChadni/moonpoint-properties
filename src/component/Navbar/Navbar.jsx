import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);
 
  const handleLogout = () =>{
    logOut()
    .then(result =>{
      console.log(result);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  return (
    <div className="container navbar bg-base-100 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-teal-500 font-bold" : "font-normal"
              }
              to="/"
            >
              Home
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                isActive ? "text-teal-500 font-bold" : "font-normal"
              }
              to="/listed-book"
            >
              Update Profile
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-teal-500 font-bold" : "font-normal"
              }
              to="/page-to-read"
            >
              User Profile
            </NavLink>
            
            
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost text-3xl font-boldtext-2xl font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-green-400 text-transparent bg-clip-text animate-gradient"
        >
          MoonPoint Properties
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-teal-500 font-bold" : "font-normal"
            }
            to="/"
          >
            Home
          </NavLink>

          {/* <NavLink
            className={({ isActive }) =>
              isActive ? "text-teal-500 font-bold" : "font-normal"
            }
            to="/update-profile"
          >
           Update Profile
          </NavLink> */}

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-teal-500 font-bold" : "font-normal"
            }
            to="/user-profile"
          >
            User Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-teal-500 font-bold" : "font-normal"
            }
            to="/about-us"
          >
            About us
          </NavLink>
          
          
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {
          user ?<button onClick={handleLogout} className="btn bg-teal-500 text-white hidden lg:block">
          Logout
        </button>:<Link to="/login"><button className="btn bg-teal-500 text-white hidden lg:block">
          Login
        </button></Link>
        }
        
        <Link to="/register"><button className="btn bg-emerald-500 text-white">Registration</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
