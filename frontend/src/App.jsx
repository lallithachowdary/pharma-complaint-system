import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ComplaintIntake from "./pages/ComplaintIntake";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/complaint" element={<ComplaintIntake />} />
    </Routes>
  );
}

export default App;