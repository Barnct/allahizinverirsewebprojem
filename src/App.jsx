import { useState } from "react";
import LoginScreen from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OgrenciScreen from "./components/OgrenciScreen";
import OgretmenScreen from "./components/OgretmenScreen";
import AdminScreen from "./components/AdminScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/OgrenciScreen" element={<OgrenciScreen />} />
          <Route path="/OgretmenScreen" element={<OgretmenScreen />} />
          <Route path="/AdminScreen" element={<AdminScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
