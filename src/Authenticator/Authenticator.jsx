import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";
import "./Authenticator.css";
import UserService from "./../userService"

const users = [
  { username: "krishna", password: "123" },
  { username: "Priyanshi", password: "123" },
  { username: "Ayushi V", password: "123" },
  { username: "Ayushi Ag", password: "123" },
  { username: "Sumit", password: "123" },
];

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
  const [errorMessage, setErrorMessage] = useState("");

  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setFormData({
      username: "",
      password: "",
      name: "",
      phone: "",
      newPassword: "",
    });
    setErrorMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const { username, password } = formData;

      // ✅ Hardcoded check
      if (username === "krishna" && password === "123") {
        UserService.setCurrentUser({ username: "krishna" });
        navigate("/homepage");
        return;
      }

      if (username === "Priyanshi" && password === "123") {
        UserService.setCurrentUser({ username: "Priyanshi" });
        navigate("/PHome");
        return;
      }

      const user = users.find((u) => u.username === username);
      if (!user) {
        setErrorMessage("Username not found! Please create an account.");
        return;
      }
      if (user.password !== password) {
        setErrorMessage("Incorrect password! Please try again.");
        return;
      }

      UserService.setCurrentUser(user); // ✅ Set user for broadcasting
      navigate("/HomePage");
    } else {
      const existingUserByPhone = users.find((u) => u.phone === formData.phone);
      if (existingUserByPhone) {
        setErrorMessage("Account with this phone number already exists! Please log in.");
        return;
      }

      const existingUserByUsername = users.find((u) => u.username === formData.username);
      if (existingUserByUsername) {
        setErrorMessage("Username already taken! Try a different one.");
        return;
      }

      const newUser = {
        username: formData.username,
        password: formData.newPassword,
        phone: formData.phone,
      };
      users.push(newUser);
      UserService.setCurrentUser(newUser); // ✅ Set user for broadcasting
      navigate("/HomePage");
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

        {errorMessage && <Typography color="error">{errorMessage}</Typography>}

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
