import React, { useState } from 'react';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="register_container">
      <h2>Sign Up</h2>
      <form onSubmit={register}>
        <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
        <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
