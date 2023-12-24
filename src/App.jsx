// src/App.jsx
import { useState } from "react";
import LoginScreen from "./components/Login";

function App() {
  var [count, setCount] = useState(0);

  return (
    <>
      <LoginScreen />
    </>
  );
}

export default App;
