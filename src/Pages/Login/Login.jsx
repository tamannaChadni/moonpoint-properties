import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {

  const {signInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);

        setLoginError("");
        setLoginSuccess("");


        signInUser(email,password)
        .then(result=>{
          console.log(result);
          navigate(location?.state ? location.state : '/');

        })
        .catch(error =>{
          console.log(error);
        })
    }

    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
        </div>
        <div className=' space-x-5'>
            <button className='btn bg-teal-300 text-white'>Google Login</button>
            <button className='btn bg-teal-300 text-white'>GitHub Login</button>
        </div>
        <div className="form-control mt-6">
          <button className="btn  bg-emerald-600 text-white">Login</button>
        </div>
        <p>If you new here then please, <span className='text-red-400'><Link to="/register">registrate</Link></span> first</p>
      </form>
      {
            loginError && <p className=" text-red-600">{loginError}</p>
        }
        {
            loginSuccess && <p className=" text-green-600">{loginSuccess}</p>
        }
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;