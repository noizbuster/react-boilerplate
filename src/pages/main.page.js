import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { observable } from 'mobx';

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

const commitScopes = {
  core: 'core module of project',
  monitoring: 'monitoring feature',
  chore: '',
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

class MainPage extends React.Component {
  constructor() {
    super();
    this.classes = useStyles;
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  componentDidCatch(error, errorInfo) {
    return <div><h1>메인이 죽어씀다</h1></div>;
  }

  componentWillUnmount() {
  }

  changeType = function(e) {
    selected.type = e.target.value;
    e.preventDefault();
  };

  render() {
    return <div>
      <h1>this is main page</h1>
      <header className="App-header">
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected.type}
            onChange={this.changeType}
          >
            {Object.entries(commitTypes).map((value, key) =>
              <MenuItem value={value} key={{ key }}>{key}:{value}</MenuItem>)}
            {/* <MenuItem value={10}>Ten</MenuItem> */}
            {/* <MenuItem value={20}>Twenty</MenuItem> */}
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </header>
    </div>;
  }
}

export default MainPage;
