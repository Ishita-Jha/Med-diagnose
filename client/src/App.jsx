import React from 'react';
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PatientChatRoom from "./pages/PatientChatRoom";
import OrderTest from './pages/OrderTest';
import OrderedTest from './pages/orderedTest';
import LaboratoryResults from "./pages/LaboratoryResults"
import SummaryPage from "./pages/SummaryPage";
import DiagnosisPage from "./pages/DiagnosisPage";
import LoadingResults from "./pages/LoadingResults";
import EvaluationPage from "./pages/EvaluationPage";
import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/patient-chat" element={<PatientChatRoom />} />

      <Route path="/order-test" element={<OrderTest />} />

      <Route path="/ordered-test" element={<OrderedTest />} />

      <Route path="/lab-results" element={<LaboratoryResults />} />

      <Route path="/summary" element={<SummaryPage />} />

      <Route path="/diagnosis" element={<DiagnosisPage />} />

      <Route path="/loading-results" element={<LoadingResults/>} />

      <Route path="/evaluation" element={<EvaluationPage />} />
    </Routes>
  );
}

export default App;
