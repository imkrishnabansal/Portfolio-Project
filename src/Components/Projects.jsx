import React, { useState } from 'react';

const Projects = () => {
  const [val, setVal] = useState("Prakhar"); // Default value

  return (
    <div>
      <h1>Projects Page</h1>

      <select 
        name="name-selector" 
        id="ns" 
        value={val} 
        onChange={(e) => setVal(e.target.value)}
      >
        <option value="Prakhar">Prakhar</option>
        <option value="Krishna">Krishna</option>
      </select>

      <h2>Hi, my name is {val}</h2>
      <p>use behavior subject from rxjs to set the current user as global</p>
    </div>
  );
}

export default Projects;
