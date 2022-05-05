import Index from './WebPages/Index';
import FAQ from './WebPages/FAQ';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Index} />
        <Route path='/faq' component={FAQ} />
      </Switch>
    </Router>
  );
}

export default App;
