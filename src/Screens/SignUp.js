import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

import { useNavigate } from 'react-router-dom';

// Inside your SignUp component 


function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await Auth.signUp({
        email: formData.email,
        password: formData.password,
        username: formData.email,
        attributes: {
          preferred_username: formData.email, 
        },
      });
      console.log('Sign up success:', user);
      console.log(user.username);
      navigate("/signin");

    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
