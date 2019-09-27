import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
          <Route exact component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
