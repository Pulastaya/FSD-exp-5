import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Aim = lazy(() => import("./pages/Aim"));
const Theory = lazy(() => import("./pages/Theory"));
const Procedure = lazy(() => import("./pages/Procedure"));

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <Suspense fallback={<div className="loader">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aim" element={<Aim />} />
              <Route path="/theory" element={<Theory />} />
              <Route path="/procedure" element={<Procedure />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
