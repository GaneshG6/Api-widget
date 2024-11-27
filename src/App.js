import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login } from './Module';
import { Sidebar } from './Component';
import { useState } from 'react';
import { ROUTES } from './Routes';
import RequireHome from './Routes/RequireHome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  function getRoutes(routes) {
    return routes && routes.length>0 && routes.map((each)=>{
      return  <Route
            path={each.path}
            element={
              localStorage.getItem("isLoggedin")  ? (
                <RequireHome>{each.component}</RequireHome>
              ) : (
                <Navigate to="/login" />
              )
            }
            key={each.key}
          />
    })
  }
  return (
<Router>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route
          path="/login"
          element={<Login />}
        />
        {getRoutes(ROUTES)}
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
