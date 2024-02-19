import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages';
import Search from './pages/search';
import Manifest from './pages/manifest';
import Settings from './pages/settings';
import About from './pages/about';
import Help from './pages/help';

function App() {
  return (
      <>
          <Router>
              <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/search'} element={<Search />} />
                  <Route path={'/manifest'} element={<Manifest/>} />
                  <Route path={'/settings'} element={<Settings />} />
                  <Route path={'/about'} element={<About />} />
                  <Route path={'/help'} element={<Help />} />
              </Routes>
          </Router>
      </>
  );
}

export default App;
