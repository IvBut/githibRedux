import './app.less'
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './main/Main';

const App = () => {
  return (
      <Router >
        <div className="container">
          <Route path="/" component={Main} />
        </div>
      </Router>
  );
};

export default App;
