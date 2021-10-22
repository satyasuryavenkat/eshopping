import React from 'react';
import Signup from './Components/Signup/Signup';
import './App.css';
import Login from './Components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PasswordReset from './Components/ResetPassword/PasswordReset';


function App() {
  return (
    
      <Router>
            <Switch>
              <Route path="/" exact component={Login}/>
              <Route path ="/signup" component={Signup} />
              <Route path ="/signin" component={Login} />
              <Route path ="/reset-password" component={PasswordReset} />
            </Switch>
        </Router>
      
  );
}

export default App;
