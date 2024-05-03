import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./html/pages/Home";
import Header from "./html/components/Header";
import Footer from "./html/components/Footer";
import ListUsers from "./html/pages/ListUsers";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/:id?" element={<Home />} />
            <Route path="/show-users" element={<ListUsers />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
