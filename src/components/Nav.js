import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink
  } from "react-router-dom";
  import HomePage from '../HomePage';
  import CreationPage from '../CreationPage';
  import ContainerPage from '../ContainerPage';

export default function Nav() {
  return (
    <div>
      <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create">Creation Page</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/container">Container Page</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero */}

        <div className="b-example-divider"></div>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/create" element={<CreationPage />} />
          <Route path="/container" element={<ContainerPage />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}
