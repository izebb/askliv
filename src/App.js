import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { QuestionairePage } from './pages/QuestionairePage';


function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/categories" component={CategoriesPage} />
          <Route exact path="/questionaire" component={QuestionairePage} />
      </Router>
    </div>
  );
}

export default App;
