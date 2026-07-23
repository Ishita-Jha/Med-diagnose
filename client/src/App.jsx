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
import { Routes, Route} from "react-router-dom";
import Profile from './pages/profile';

// function App() {
//   return (
//     <div>
//       <Dashboard/>
//       <Login />
//       <Register/>
//       <PatientChatRoom/>
//       <OrderTest/>
//       <OrderedTest/>
//       <LaboratoryResults/>
//       <SummaryPage/>
//       <DiagnosisPage/>

//     </div>
    
//   );
// }

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
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
