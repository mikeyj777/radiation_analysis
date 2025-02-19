import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Functional from './components/Functional';
import Func001 from './components/001';
import Func002 from './components/002';
import Func003 from './components/003';
import Func004 from './components/004';
import Func005 from './components/005';
import Func006 from './components/006';
import Func007 from './components/007';
import Func008 from './components/008';
import Func009 from './components/009';
import Func010 from './components/010';
import Func011 from './components/011';
import './App.css';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/func" element={<Functional />} />
          <Route path="/001" element={<Func001 />} />
          <Route path="/002" element={<Func002 />} />
          <Route path="/003" element={<Func003 />} />
          <Route path="/004" element={<Func004 />} />
          <Route path="/005" element={<Func005 />} />
          <Route path="/006" element={<Func006 />} />
          <Route path="/007" element={<Func007 />} />
          <Route path="/008" element={<Func008 />} />
          <Route path="/009" element={<Func009 />} />
          <Route path="/010" element={<Func010 />} />
          <Route path="/011" element={<Func011 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;