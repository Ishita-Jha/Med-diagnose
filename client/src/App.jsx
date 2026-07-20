import React from 'react';
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PatientChatRoom from "./pages/PatientChatRoom";

function App() {
  return (
    <div>
      <Dashboard/>
      <Login />
      <Register/>
      <PatientChatRoom/>

    </div>
    
  );
}

export default App;
