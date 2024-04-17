import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
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
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;