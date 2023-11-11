import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom';
function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      const user = await Auth.signIn(formData.username, formData.password);
      console.log('Sign in success:', user);
      navigate("/UserHome");
      // You can redirect or update app state here based on successful sign in
    } catch (error) {
      console.error('Sign in error:', error);
      // Handle sign in errors such as user not confirmed, password incorrect etc.
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={formData.username}
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
