import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/Categories';


function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={CategoriesPage} />
      </Router>
    </div>
  );
}

export default App;
