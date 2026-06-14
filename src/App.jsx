 import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import WorkoutDetails from "./pages/WorkoutDetails";
import Schedule from "./pages/Schedule";
import Profile from "./pages/Profile";


import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>


        <Route
          path="/"
          element={<Login />}
        />


        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />


        <Route
          path="/workouts"
          element={
            <ProtectedRoute>
              <Workouts />
            </ProtectedRoute>
