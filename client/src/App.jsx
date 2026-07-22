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

function App() {
  return (
    <div>
      <Dashboard/>
      <Login />
      <Register/>
      <PatientChatRoom/>
      <OrderTest/>
      <OrderedTest/>
      <LaboratoryResults/>
      <SummaryPage/>
      <DiagnosisPage/>

    </div>
    
  );
}

export default App;
