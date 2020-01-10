import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class NavBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
          {/*   <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h6">
            Commit Message Generator
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    );
  }
}