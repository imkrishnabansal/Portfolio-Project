import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";
import "./Authenticator.css";

const users = [
  { username: "krishna", password: "123" },
  { username: "Priyanshi", password: "Priyanshi@123" },
  { username: "Ayushi V", password: "Ayushi@123" },
  { username: "Ayushi Ag", password: "AyushiA@123" },
  { username: "Sumit", password: "Sumit@123" },
]; // ✅ Predefined user database

const Authenticator = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    newPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Error message state

  // Toggle Login/Sign-up
  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: "",
      password: "",
      name: "",
      phone: "",
      newPassword: "",
    });
    setErrorMessage(""); // Clear error message when switching
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const user = users.find((u) => u.username === formData.username);
      if (!user) {
        setErrorMessage("Username not found! Please create an account.");
        return;
      }
      if (user.password !== formData.password) {
        setErrorMessage("Incorrect password! Please try again.");
        return;
      }
      navigate("/HomePage"); // Redirect to homepage if login is successful
    } else {
      // ✅ Sign Up: Check if phone number already exists
      const existingUserByPhone = users.find((u) => u.phone === formData.phone);
      if (existingUserByPhone) {
        setErrorMessage("Account with this phone number already exists! Please log in.");
        return;
      }

      // ✅ Check if username is already taken
      const existingUserByUsername = users.find((u) => u.username === formData.username);
      if (existingUserByUsername) {
        setErrorMessage("Username already taken! Try a different one.");
        return;
      }

      // ✅ Register the new user
      users.push({ 
        username: formData.username, 
        password: formData.newPassword, 
        phone: formData.phone 
      });
      navigate("/HomePage"); //  Redirect to homepage after successful registration
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="auth-container">
        <div className="auth-header">
          <img src="/assets/Riwayat.png" alt="Logo" className="logo" />
          <Typography variant="h5" gutterBottom>
            {isLogin ? "Login" : "Sign Up"}
          </Typography>
          <Button variant="outlined" color="primary" onClick={toggleAuth}>
            {isLogin ? "Switch to Sign Up" : "Switch to Login"}
          </Button>
        </div>

        {errorMessage && <Typography color="error">{errorMessage}</Typography>} {/* ✅ Show error message */}

        <form onSubmit={handleSubmit} className="auth-form">
          {isLogin ? (
            <>
              <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                required
                className="large-input"
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                className="small-input"
              />
            </>
          ) : (
            <>
              <TextField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                className="large-input"
              />
              <TextField
                label="Enter Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                className="large-input"
              />
              <TextField
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                fullWidth
                required
                className="large-input"
              />
              <TextField
                label="Create Password"
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                fullWidth
                required
                className="small-input"
              />
            </>
          )}

          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Authenticator;
