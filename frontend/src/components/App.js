/* import NotesPage from "../pages/NotesPage";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage"; 
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/Logoutpage";

function App() {


  return (<div className="App">
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>


    <Routes>
      <Route index element={
      <RequireAuth>
        <NotesPage />
      </RequireAuth>} 
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/logout" element={<LogoutPage />} />
    </Routes>
    </BrowserRouter>


  </div>
  );
}

export default App;

*/

import React from "react";
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/Logoutpage";
import '../styles.css'; // Import the CSS

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">Login</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup" className="navbar-link">Signup</Link>
            </li>
            <li className="navbar-item">
              <Link to="/logout" className="navbar-link">Logout</Link>
            </li>
          </ul>
        </nav>

        <div className="page-content">
          <Routes>
            <Route index element={<RequireAuth><NotesPage /></RequireAuth>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
