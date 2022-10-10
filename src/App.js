import React, { useState } from "react";
import SingleColor from "./SingleColor";

// import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  return <h2>color generator</h2>;
}

export default App;
