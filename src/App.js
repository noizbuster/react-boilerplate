import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import MainPage from './pages/main.page';
import NavBar from './components/navbar';
import LoginPage from './pages/login.page';

const commitTypes = {
  build: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
  ci: 'Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)',
  docs: 'Documentation only changes',
  feat: 'A new feature',
  fix: 'A bug fix',
  perf: 'A code change that improves performance',
  refactor: 'A code change that neither fixes a bug nor adds a feature',
  style: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
  test: 'Adding missing tests or correcting existing tests',
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const selected = observable({ type: '' });

function App() {
  const classes = useStyles();
  const changeType = function(e) {
    selected.type = e.target.value;
    e.preventDefault();
  };
  return (
    <Router>
      <div className="App">
        {/* nav bar */}
        <NavBar></NavBar>
      </div>

      <Switch>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
