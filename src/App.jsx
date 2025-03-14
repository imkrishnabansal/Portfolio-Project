import './App.css'
import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import HomeRouter from './Router';
// Define Routes Properly
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HomePage />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <HomePage />
        <About />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div>
        <HomePage />
        <Projects />
      </div>
    ),
  },
]);

function App() {
  <About/>
  return <RouterProvider router={router} />;
}

export default App;
