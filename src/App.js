import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import WildfireList from "./Components/WildfireList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/wildfires" element={<WildfireList />} />
      </Routes>
    </Router>
  );
};

export default App;
