import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { QuestionairePage } from './pages/QuestionairePage';
import { DashboardPage } from './pages/DashboardPage';
import { AppProvider } from './context/AppContext';


function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/categories" component={CategoriesPage} />
            <Route exact path="/questionnaire" component={QuestionairePage} />
            <Route path="/dashboard/info" component={DashboardPage} />
            <Route path="/dashboard/checklist" component={DashboardPage} />
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
