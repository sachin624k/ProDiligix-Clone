import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TrackShipment from "./pages/TrackShipment";
import CreateShipment from "./pages/CreateShipment";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./components/PrivateRoute";
import Loader from "./components/Loader"; // NEW

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading, or wait for real data/API loading if needed.
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <UserProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/track" element={<TrackShipment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          {/* Protected routes */}
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreateShipment />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
