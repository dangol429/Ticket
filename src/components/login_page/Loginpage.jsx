import React, { useState } from 'react';
import './loginpage.css';
import { Link } from 'react-router-dom';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate mandatory fields
    if (!username || !password) {
      alert('Please fill in all mandatory fields.');
      return;
    }

    // Perform login logic here
    // Access the entered username and password in the state variables
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect to the landing page with the username as a parameter
    // You can replace `/LandingPage/${username}` with your desired route
    // where you want to navigate after successful login
    // For example, <Link to="/dashboard">...</Link>
  };

  return (
    <section className='container login-container'>
      <div className='left'>
        <h1>Welcome Back!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, reiciendis! Deleniti blanditiis doloribus unde beatae dolorum sunt atque ipsa, ut non perspiciatis cupiditate, soluta eum dolorem veritatis quisquam dignissimos debitis! Velit cupiditate quaerat eum sint.</p>
      </div>

      <div className='right'>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputUsername">Username</label>
            <input value={username} onChange={handleUsernameChange} type="username" className="form-control" id="exampleInputUsername" aria-describedby="UsernameHelp" placeholder="Enter Username" required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input value={password} onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
          </div>
          <a id='forgot' href='#'>Forgot Password</a>
          {username && password ? (
            <Link to={`/LandingPage/${username}`}>
              <button type="submit" className="btn btn-primary">Submit</button>
            </Link>
          ) : (
            <button type="submit" className="btn btn-primary" disabled>Submit</button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Loginpage;
